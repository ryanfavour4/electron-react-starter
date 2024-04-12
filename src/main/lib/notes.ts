// import { shell } from 'electron/common'
import { homedir } from 'os'
import fs from 'fs'
import { app, BrowserWindow, dialog } from 'electron/main'
import path from 'path'

export const getNotes = async (val: any) => {
  console.log(homedir, 'HHHOOOOMMMMMMEEEEE DDDDDDIIIIIIRRRRRR')
  console.log(val, 'VVVVVAAALLLLUUUEEEEEEE')
}

export const openNote = async (val: any) => {
  console.log(val)
  fs.open(process.env.USERPROFILE + '\\NewFile.md', 'w+', (err, fd) => {
    console.log(err, fd)
  })
}

export const writeNote = async (mainWindow: BrowserWindow, data: any) => {
  console.log(data, 'DATA FROM NOTES LIB')

  dialog
    .showSaveDialog(mainWindow, {
      defaultPath: path.join(app.getPath('downloads'), data.title + '.md' || 'new-save.md'),
    })
    .then((fileName) => {
      if (fileName.filePath) {
        fs.writeFile(fileName.filePath, data.content, (err) => {
          console.log(data)
          if (err) dialog.showErrorBox('Error', err.message)
          console.log('File is created successfully.')
        })
      } else {
        console.log('File is not created.')
      }
    })
}
