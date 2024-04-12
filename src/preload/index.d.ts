import { ElectronAPI } from '@electron-toolkit/preload'
import { getNotes } from '../main/lib/notes'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    context: {
      locale: string
      getNotes: (args: any) => Promise<any>
    }
  }
}
