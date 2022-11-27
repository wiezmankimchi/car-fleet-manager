import type { EditCarModelById, UpdateCarModelInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CarModelForm from 'src/components/CarModel/CarModelForm'

export const QUERY = gql`
  query EditCarModelById($id: Int!) {
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
const UPDATE_CAR_MODEL_MUTATION = gql`
  mutation UpdateCarModelMutation($id: Int!, $input: UpdateCarModelInput!) {
    updateCarModel(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ carModel }: CellSuccessProps<EditCarModelById>) => {
  const [updateCarModel, { loading, error }] = useMutation(
    UPDATE_CAR_MODEL_MUTATION,
    {
      onCompleted: () => {
        toast.success('CarModel updated')
        navigate(routes.carModels())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCarModelInput,
    id: EditCarModelById['carModel']['id']
  ) => {
    updateCarModel({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit CarModel {carModel?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CarModelForm carModel={carModel} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
