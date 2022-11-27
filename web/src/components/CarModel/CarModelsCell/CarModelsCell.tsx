import type { FindCarModels } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CarModels from 'src/components/CarModel/CarModels'

export const QUERY = gql`
  query FindCarModels {
    carModels {
      id
      name
      createdAt
      updateAt
      createdBy
      updatedBy
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No carModels yet. '}
      <Link
        to={routes.newCarModel()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ carModels }: CellSuccessProps<FindCarModels>) => {
  return <CarModels carModels={carModels} />
}
