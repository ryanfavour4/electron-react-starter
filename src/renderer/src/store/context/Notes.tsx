import React, { createContext, useEffect } from 'react'
import { NotesContextType, NoteType, props } from '@renderer/types/NoteStore'
import notesData from '../MockNotes.json'

export const NotesContext = createContext<NotesContextType>({} as unknown as NotesContextType)

const NotesProvider = ({ children }: props) => {
  const [notes, setNotes] = React.useState<NoteType[]>([])
  const [activeNote, setActiveNote] = React.useState<NoteType | null>(null)

  useEffect(() => {
    ;(async function () {
      Promise.resolve()
        .then(() => {
          // sort notes data by date
          notesData.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
          })
          setNotes(notesData)
        })
        .catch((err) => {
          console.log(err)
        })
    })()
  }, [])

  const handleSelectNote = (note: NoteType) => {
    const updatedNotes = [...notes]
    const index = updatedNotes.findIndex((n) => n.id === note.id)
    updatedNotes.splice(index, 1)
    updatedNotes.unshift(note)
    setNotes(updatedNotes)
    setActiveNote(note)
  }

  const handleCreateNote = (title: string) => {
    const newNote = {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      title,
      content: '',
      date: new Date().toISOString(),
    }

    const updatedNotes = [...notes]
    updatedNotes.unshift(newNote)
    setNotes(updatedNotes)
  }

  const handleChangeNoteContent = (value: string, activeNote: NoteType | null) => {
    if (activeNote) {
      const updatedNotes = notes.map((note) => {
        if (note.id === activeNote.id) {
          return { ...note, content: value }
        }
        return note
      })
      setNotes(updatedNotes)
    }
  }

  const handleDeleteNote = (note: NoteType) => {
    setNotes(notes.filter((n) => n.id !== note.id))
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        activeNote,
        handleDeleteNote,
        handleCreateNote,
        handleChangeNoteContent,
        handleSelectNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export default NotesProvider
