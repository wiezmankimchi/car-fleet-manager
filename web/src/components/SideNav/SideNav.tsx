import { useTranslation } from 'react-i18next'

import { useAuth } from '@redwoodjs/auth'
import { routes, Link } from '@redwoodjs/router'

import {
  foursquares,
  piechart,
  lockClosed,
  lockOpen,
  usergroup,
  officeBuilding2,
  bellAlert,
  car,
  car2CV,
  driver,
  loginEnter,
  logoutExit,
} from 'src/lib/icons'

const SideNavEntry = ({
  entry,
  icon,
  linkto,
  locked = true,
}: {
  entry: string
  icon: object
  linkto: string
  locked?: boolean
}) => {
  const { isAuthenticated } = useAuth()
  const { t } = useTranslation()
  return (
    <>
      <li>
        <Link
          to={linkto}
          className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
        >
          {icon}
          <span className="flex-1 whitespace-nowrap ltr:ml-3 rtl:mr-3">
            {t(entry)}
          </span>
          {locked && (
            <span className="inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800">
              {isAuthenticated ? lockOpen() : lockClosed()}
            </span>
          )}
        </Link>
      </li>
    </>
  )
}

const SideNav = () => {
  const { t, i18n } = useTranslation()
  const { logOut } = useAuth()
  const signOut = () => {
    logOut()
  }

  // document.body.dir = i18n.dir()

  return (
    <>
      <aside
        id="sidebar"
        className="transition-width fixed top-0 left-0 z-20 hidden h-full w-64 flex-shrink-0 flex-col pt-16 duration-75 lg:flex"
        aria-label="Sidebar"
      >
        <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex-1 space-y-1 divide-y bg-white px-3">
              <ul className="space-y-2 pb-2">
                <li>
                  <form action="#" method="GET" className="lg:hidden">
                    <label htmlFor="mobile-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        {foursquares()}
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="mobile-search"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:ring-cyan-600"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </li>
                <SideNavEntry
                  entry="Dashboard"
                  icon={piechart()}
                  linkto={routes.dashboard()}
                  locked={false}
                />

                <SideNavEntry
                  entry="Companies"
                  icon={officeBuilding2()}
                  linkto={routes.companies()}
                />
                <SideNavEntry
                  entry="Alerts"
                  icon={bellAlert()}
                  linkto={routes.alerts()}
                />
                <SideNavEntry
                  entry="Cars"
                  icon={car()}
                  linkto={routes.cars()}
                />
                <SideNavEntry
                  entry="Models"
                  icon={car2CV()}
                  linkto={routes.carModelMakes()}
                />
                <SideNavEntry
                  entry="Drivers"
                  icon={driver()}
                  linkto={routes.drivers()}
                />
              </ul>
              {/* <div className="space-y-2 pt-2"></div> */}
              <ul>
                <SideNavEntry
                  entry="Users"
                  icon={usergroup()}
                  linkto={routes.users()}
                />
                <SideNavEntry
                  entry="Log In"
                  icon={loginEnter()}
                  linkto={routes.login()}
                  locked={false}
                />
                <li>
                  <button
                    className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                    onClick={() => signOut()}
                  >
                    {logoutExit()}
                    <span className="ltr:ml-3 rtl:mr-3 flex-1 whitespace-nowrap">
                      {t('Log Out')}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <div
        className="fixed inset-0 z-10 hidden bg-gray-900 opacity-50"
        id="sidebarBackdrop"
      ></div>
    </>
  )
}

export default SideNav
