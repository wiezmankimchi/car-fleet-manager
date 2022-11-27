import type { FindCars } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Cars from 'src/components/Car/Cars'

export const QUERY = gql`
  query FindCars {
    cars {
      id
      registrtion
      regDate
      makeId
      driverId
      companyId
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
      {'No cars yet. '}
      <Link
        to={routes.newCar()}
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

export const Success = ({ cars }: CellSuccessProps<FindCars>) => {
  return <Cars cars={cars} />
}
