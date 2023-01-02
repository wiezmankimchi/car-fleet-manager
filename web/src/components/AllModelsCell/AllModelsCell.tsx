import { useState } from 'react'

import type { Query } from 'types/graphql'

import { Form, SelectField } from '@redwoodjs/forms'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Pagination from 'src/components/Pagination/Pagination'

export const beforeQuery = ({ page, perPage }) => {
  page = page ? parseInt(page) : 1
  perPage = perPage ? parseInt(perPage) : 5
  return { variables: { page: page, limit: perPage } }
}
export const QUERY = gql`
  query AllModelsPaged($page: Int, $limit: Int) {
    allModels(page: $page, limit: $limit) {
      models {
        id
        name
      }
      count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ allModels, page, perPage, onChange }) => {
  return (
    <>
      {allModels.models.map((model) => {
        return (
          <li key={model.id}>
            {model.id} / {model.name}
          </li>
        )
      })}
      <br />
      <div>count:{allModels.count}</div>
      <div>
        page:{page}{' '}
        {page > Math.ceil(allModels.count / perPage)
          ? Math.ceil(allModels.count / perPage)
          : page}
      </div>
      <Form>
        <SelectField
          name="perPage"
          multiple={false}
          value={perPage}
          onChange={(e) => onChange(parseInt(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </SelectField>
      </Form>
      <div>Selected:{perPage}</div>
      <Pagination
        count={allModels.count}
        page={page}
        perPage={perPage ? perPage : 5}
      />
    </>
  )
}
