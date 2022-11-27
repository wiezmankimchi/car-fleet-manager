// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MainTransactionSectionHeader> = (args) => {
//   return <MainTransactionSectionHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MainTransactionSectionHeader from './MainTransactionSectionHeader'

export const generated = () => {
  return <MainTransactionSectionHeader />
}

export default {
  title: 'Components/MainTransactionSectionHeader',
  component: MainTransactionSectionHeader,
} as ComponentMeta<typeof MainTransactionSectionHeader>
