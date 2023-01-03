import type { FindCarModelMakeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CarModelMake from 'src/components/CarModelMake/CarModelMake'

export const QUERY = gql`
  query FindCarModelMakeById($id: Int!) {
    carModelMake: carModelMake(id: $id) {
      id
      name
      carMakeId
      createdAt
      createdBy
      updateAt
      updatedBy
      createdByUser {
        id
        firstName
        lastName
      }
      updatedByUser {
        id
        firstName
        lastName
      }
      make {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CarModelMake not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  carModelMake,
}: CellSuccessProps<FindCarModelMakeById>) => {
  return <CarModelMake carModelMake={carModelMake} />
}
