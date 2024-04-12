import { useContext } from 'react'
import { useModal } from '@/components/Modal.controller'
import { NotesContext } from '@renderer/store/context/Notes'
import { NoteType } from '@renderer/types/NoteStore'

export default function useSideNav() {
  const { notes, activeNote, handleCreateNote, handleDeleteNote, handleSelectNote } =
    useContext(NotesContext)
  const { openModal, closeModal, isModalClosed } = useModal()
  const saveNote = (data: NoteType): void => window.electron.ipcRenderer.send('save-note', data)

  return {
    notes,
    activeNote,
    isModalClosed,
    openModal,
    saveNote,
    handleCreateNote,
    handleDeleteNote,
    handleSelectNote,
    closeModal,
  }
}
