import type { FindCarModelMakes } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CarModelMakes from 'src/components/CarModelMake/CarModelMakes'

export const QUERY = gql`
  query FindCarModelMakes {
    carModelMakes {
      id
      name
      createdAt
      updateAt
      createdBy
      updatedBy
      carMakeId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No carModelMakes yet. '}
      <Link
        to={routes.newCarModelMake()}
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

export const Success = ({ carModelMakes }: CellSuccessProps<FindCarModelMakes>) => {
  return <CarModelMakes carModelMakes={carModelMakes} />
}
