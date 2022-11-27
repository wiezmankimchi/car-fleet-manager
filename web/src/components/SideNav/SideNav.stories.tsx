// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SideNav> = (args) => {
//   return <SideNav {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SideNav from './SideNav'

export const generated = () => {
  return <SideNav />
}

export default {
  title: 'Components/SideNav',
  component: SideNav,
} as ComponentMeta<typeof SideNav>
