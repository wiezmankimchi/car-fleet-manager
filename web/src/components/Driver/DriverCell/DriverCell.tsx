import type { FindDriverById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Driver from 'src/components/Driver/Driver'

export const QUERY = gql`
  query FindDriverById($id: Int!) {
    driver: driver(id: $id) {
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

export const Empty = () => <div>Driver not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ driver }: CellSuccessProps<FindDriverById>) => {
  return <Driver driver={driver} />
}
