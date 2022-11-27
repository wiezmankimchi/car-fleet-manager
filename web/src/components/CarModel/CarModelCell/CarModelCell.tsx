import type { FindCarModelById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CarModel from 'src/components/CarModel/CarModel'

export const QUERY = gql`
  query FindCarModelById($id: Int!) {
    carModel: carModel(id: $id) {
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

export const Empty = () => <div>CarModel not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ carModel }: CellSuccessProps<FindCarModelById>) => {
  return <CarModel carModel={carModel} />
}
