// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LastestTableEntry> = (args) => {
//   return <LastestTableEntry {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import LastestTableEntry from './LastestTableEntry'

export const generated: ComponentStory<typeof LastestTableEntry> = (args) => {
  return <LastestTableEntry {...args} />
}

export default {
  title: 'Components/LastestTableEntry',
  component: LastestTableEntry,
} as ComponentMeta<typeof LastestTableEntry>
