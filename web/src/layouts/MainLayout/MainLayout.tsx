import HeaderNav from 'src/components/HeaderNav/HeaderNav'
import SideNav from 'src/components/SideNav/SideNav'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <HeaderNav />
      <div className="flex overflow-hidden bg-white pt-16">
        <SideNav />
        <div
          id="main-content"
          className="relative h-full w-full overflow-y-auto bg-gray-50 lg:ml-64"
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default MainLayout
