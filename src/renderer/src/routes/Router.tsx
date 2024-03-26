import NotePad from '@renderer/pages/notepad/NotePad'
import { Routes, Route } from 'react-router-dom'

function Routers(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<NotePad />} />
    </Routes>
  )
}
export default Routers
