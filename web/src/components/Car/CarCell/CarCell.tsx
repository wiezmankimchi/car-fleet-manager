import type { FindCarById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Car from 'src/components/Car/Car'

export const QUERY = gql`
  query FindCarById($id: Int!) {
    car: car(id: $id) {
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

export const Empty = () => <div>Car not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ car }: CellSuccessProps<FindCarById>) => {
  return <Car car={car} />
}
