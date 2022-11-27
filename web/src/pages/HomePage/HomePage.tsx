import { useTranslation } from 'react-i18next'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { logOut } = useAuth()
  const { t, i18n } = useTranslation()

  const onClick = () => {
    logOut()
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    document.body.dir = i18n.dir()
  }
  // document.body.dir = i18n.dir()
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <div>
        {t('welcome')}
        <button
          className="mx-2 rounded bg-slate-300 p-2"
          onClick={() => changeLanguage('en')}
        >
          en
        </button>
        <button
          className="mx-2 rounded bg-slate-300 p-2"
          onClick={() => changeLanguage('he')}
        >
          he
        </button>
        <button
          className="mx-2 rounded bg-slate-300 p-2"
          onClick={() => changeLanguage('fr')}
        >
          fr
        </button>
      </div>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <ul>
        <li>
          <Link to={routes.login()}>
            <button className="group relative h-8 w-48 overflow-hidden rounded-lg border border-orange-100 bg-white text-sm shadow-lg">
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-orange-900">
                Login Page
              </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to={routes.signup()}>
            <button className="group relative h-8 w-48 overflow-hidden rounded-lg border border-orange-100 bg-white text-sm shadow-lg">
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-orange-900">
                Signup Page
              </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to={routes.forgotPassword()}>
            <button className="group relative h-8 w-48 overflow-hidden rounded-lg border border-orange-100 bg-white text-sm shadow-lg">
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-orange-900">
                Forgot Password Page
              </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to={routes.resetPassword()}>
            <button className="group relative h-8 w-48 overflow-hidden rounded-lg border border-orange-100 bg-white text-sm shadow-lg">
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-orange-900">
                Reset Password Page
              </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to={routes.dashboard()}>
            <button className="group relative h-8 w-48 overflow-hidden rounded-lg border border-orange-100 bg-white text-sm shadow-lg">
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-orange-900">
                DashbaordPage
              </span>
            </button>
          </Link>
        </li>
        <li>
          {/* <Link to={routes.dashboard()}> */}
          <button
            className="group relative h-8 w-48 overflow-hidden rounded-lg border border-orange-100 bg-white text-sm shadow-lg"
            onClick={() => onClick()}
          >
            <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-blue-900">
              Logout
            </span>
          </button>
          {/* </Link> */}
        </li>
      </ul>
    </>
  )
}

export default HomePage
