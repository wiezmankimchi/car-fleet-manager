import { render } from '@redwoodjs/testing/web'

import HeaderNav from './HeaderNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeaderNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderNav />)
    }).not.toThrow()
  })
})
