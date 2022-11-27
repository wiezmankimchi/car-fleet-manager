import { render } from '@redwoodjs/testing/web'

import MainTopSection from './MainTopSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainTopSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainTopSection />)
    }).not.toThrow()
  })
})
