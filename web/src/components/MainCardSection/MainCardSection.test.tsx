import { render } from '@redwoodjs/testing/web'

import MainCardSection from './MainCardSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainCardSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainCardSection />)
    }).not.toThrow()
  })
})
