import { render } from '@redwoodjs/testing/web'

import TransactionTable from './TransactionTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TransactionTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TransactionTable />)
    }).not.toThrow()
  })
})
