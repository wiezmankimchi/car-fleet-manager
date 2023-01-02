import type { ComponentMeta } from '@storybook/react'

import SupportPage from './SupportPage'

export const generated = () => {
  return <SupportPage />
}

export default {
  title: 'Pages/SupportPage',
  component: SupportPage,
} as ComponentMeta<typeof SupportPage>
