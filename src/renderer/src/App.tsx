/* eslint-disable @typescript-eslint/no-explicit-any */
// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
// import { MouseEvent } from 'react'
import Routers from './routes/Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  )
}

export default App
