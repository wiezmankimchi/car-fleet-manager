// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TransactionTable> = (args) => {
//   return <TransactionTable {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TransactionTable from './TransactionTable'

export const generated = () => {
  return <TransactionTable />
}

export default {
  title: 'Components/TransactionTable',
  component: TransactionTable,
} as ComponentMeta<typeof TransactionTable>
