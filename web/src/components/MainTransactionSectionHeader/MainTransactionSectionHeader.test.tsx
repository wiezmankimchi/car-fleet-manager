import { render } from '@redwoodjs/testing/web'

import MainTransactionSectionHeader from './MainTransactionSectionHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainTransactionSectionHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainTransactionSectionHeader />)
    }).not.toThrow()
  })
})
