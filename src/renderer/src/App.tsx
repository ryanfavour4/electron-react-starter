import CustomWindowTitleBar from '@/layout/custom-window-title-bar/CustomWindowTitleBar'
import Routers from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import RootStore from '@/store/RootStore'

function App() {
  return (
    <>
      <BrowserRouter>
        <RootStore>
          <CustomWindowTitleBar />
          <Routers />
        </RootStore>
      </BrowserRouter>
    </>
  )
}

export default App
