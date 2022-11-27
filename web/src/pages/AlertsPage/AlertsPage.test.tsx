import { render } from '@redwoodjs/testing/web'

import AlertsPage from './AlertsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AlertsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AlertsPage />)
    }).not.toThrow()
  })
})
