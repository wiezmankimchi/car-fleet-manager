// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof HeaderNav> = (args) => {
//   return <HeaderNav {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import HeaderNav from './HeaderNav'

export const generated = () => {
  return <HeaderNav />
}

export default {
  title: 'Components/HeaderNav',
  component: HeaderNav,
} as ComponentMeta<typeof HeaderNav>
