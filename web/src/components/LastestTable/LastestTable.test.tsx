import { render } from '@redwoodjs/testing/web'

import LastestTable from './LastestTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LastestTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LastestTable title={''} />)
    }).not.toThrow()
  })
})
