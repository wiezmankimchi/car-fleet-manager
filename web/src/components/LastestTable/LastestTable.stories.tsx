// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LastestTable> = (args) => {
//   return <LastestTable {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import LastestTable from './LastestTable'

export const generated: ComponentStory<typeof LastestTable> = (args) => {
  return <LastestTable {...args} />
}

export default {
  title: 'Components/LastestTable',
  component: LastestTable,
} as ComponentMeta<typeof LastestTable>
