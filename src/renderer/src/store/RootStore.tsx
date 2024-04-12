import NotesProvider from './context/Notes'

export default function RootStore({ children }) {
  return <NotesProvider>{children}</NotesProvider>
}
