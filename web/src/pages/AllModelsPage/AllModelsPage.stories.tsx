import type { ComponentMeta } from '@storybook/react'

import AllModelsPage from './AllModelsPage'

export const generated = () => {
  return <AllModelsPage />
}

export default {
  title: 'Pages/AllModelsPage',
  component: AllModelsPage,
} as ComponentMeta<typeof AllModelsPage>
