import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AlertsPage = () => {
  return (
    <>
      <MetaTags title="Alerts" description="Alerts page" />

      <h1>AlertsPage</h1>
      <p>
        Find me in <code>./web/src/pages/AlertsPage/AlertsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>alerts</code>, link to me with `
        <Link to={routes.alerts()}>Alerts</Link>`
      </p>
    </>
  )
}

export default AlertsPage
