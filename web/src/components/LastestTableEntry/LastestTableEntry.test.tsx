import { render } from '@redwoodjs/testing/web'

import LastestTableEntry from './LastestTableEntry'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LastestTableEntry', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LastestTableEntry />)
    }).not.toThrow()
  })
})
