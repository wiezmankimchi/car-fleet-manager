// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MainCardSection> = (args) => {
//   return <MainCardSection {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MainCardSection from './MainCardSection'

export const generated = () => {
  return <MainCardSection />
}

export default {
  title: 'Components/MainCardSection',
  component: MainCardSection,
} as ComponentMeta<typeof MainCardSection>
