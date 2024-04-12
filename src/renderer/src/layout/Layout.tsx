import NavBar from './NavBar'
import SideNav from './SideNav'

export default function ({ children }) {
  return (
    <div className="flex">
      <SideNav />
      <div className="w-full">
        <NavBar />
        <div className="h-full w-full">
          <div className="h-[calc(100vh_-_7rem)] overflow-y-scroll">{children}</div>
        </div>
      </div>
    </div>
  )
}
