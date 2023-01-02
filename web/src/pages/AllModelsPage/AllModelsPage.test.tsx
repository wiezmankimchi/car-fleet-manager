import { render } from '@redwoodjs/testing/web'

import AllModelsPage from './AllModelsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AllModelsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllModelsPage />)
    }).not.toThrow()
  })
})
