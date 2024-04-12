import NotePage from '@renderer/pages/notepad/NotePage'
import { Routes, Route } from 'react-router-dom'

function Routers(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<NotePage />} />
      </Routes>
    </>
  )
}
export default Routers
