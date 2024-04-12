import { SandpackConfig } from '@mdxeditor/editor'
import { NotesContext } from '@renderer/store/context/Notes'
import { useContext, useEffect } from 'react'

export default function useEditor() {
  const virtuosoSampleSandpackConfig: SandpackConfig = {
    defaultPreset: 'react',
    presets: [
      {
        name: 'react-js',
        label: 'React Label',
        meta: 'react',
        sandpackTemplate: 'react',
        sandpackTheme: 'dark',
        snippetFileName: 'App.jsx',
        dependencies: undefined,
        snippetLanguage: 'jsx',
        files: {
          code: 'console.log("Hello, Sandpack!");',
          language: 'javascript',
        },
      },
    ],
  }
  const { activeNote, handleChangeNoteContent } = useContext(NotesContext)

  useEffect(() => {
    const loadIt = async () => await window.context.getNotes('Nothing coin')
    console.log(loadIt())
    console.log(activeNote)
  }, [])

  return { activeNote, handleChangeNoteContent, virtuosoSampleSandpackConfig }
}
