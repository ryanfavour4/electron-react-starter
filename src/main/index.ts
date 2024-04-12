import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { getNotes, openNote, writeNote } from './lib/notes'

let mainWindow: BrowserWindow

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    title: 'Note Memo',
    frame: false,
    vibrancy: 'under-window',
    transparent: true,
    // visualEffectState: 'followWindow',
    // titleBarStyle: 'default',
    // trafficLightPosition: { x: 10, y: 10 },
    // center: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      experimentalFeatures: true,
      contextIsolation: false,
      webSecurity: false,
    },
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//*** _____________________________________ */
//*** Custom Window Title Bar Functions **** */
//*** _____________________________________ */
ipcMain.on('minimize-window', () => {
  mainWindow.minimize()
})

ipcMain.on('maximize-window', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.restore()
    mainWindow.unmaximize()
  } else {
    mainWindow.maximize()
  }
})

ipcMain.on('close-window', () => {
  mainWindow.close()
})

// IPC test
ipcMain.on('ping', () => console.log('pong'))
ipcMain.handle('getNotes', (val: any) => getNotes(val))
ipcMain.on('open-note', (val: any) => openNote(val))

ipcMain.on('save-note', (_, data) => writeNote(mainWindow, data))
