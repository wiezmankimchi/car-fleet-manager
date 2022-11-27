// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MainTopSection> = (args) => {
//   return <MainTopSection {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MainTopSection from './MainTopSection'

export const generated = () => {
  return <MainTopSection />
}

export default {
  title: 'Components/MainTopSection',
  component: MainTopSection,
} as ComponentMeta<typeof MainTopSection>
