import type { FindDrivers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Drivers from 'src/components/Driver/Drivers'

export const QUERY = gql`
  query FindDrivers {
    drivers {
      id
      name
      email
      phone
      dob
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
      {'No drivers yet. '}
      <Link
        to={routes.newDriver()}
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

export const Success = ({ drivers }: CellSuccessProps<FindDrivers>) => {
  return <Drivers drivers={drivers} />
}
