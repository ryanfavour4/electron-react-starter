export type props = {
  children: React.ReactNode
}

export type NotesContextType = {
  notes: NoteType[] | []
  activeNote: NoteType | null
  handleSelectNote: (note: NoteType) => void
  handleDeleteNote: (note: NoteType) => void
  handleCreateNote: (title: string) => void
  handleChangeNoteContent: (value: string, activeNote: NoteType | null) => void
}

export type NoteType = {
  id: string
  title: string
  content: string
  date: string
}
