import type { ComponentMeta } from '@storybook/react'

import AlertsPage from './AlertsPage'

export const generated = () => {
  return <AlertsPage />
}

export default {
  title: 'Pages/AlertsPage',
  component: AlertsPage,
} as ComponentMeta<typeof AlertsPage>
