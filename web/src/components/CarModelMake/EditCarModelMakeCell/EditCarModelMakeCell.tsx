import type { EditCarModelMakeById, UpdateCarModelMakeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CarModelMakeForm from 'src/components/CarModelMake/CarModelMakeForm'

export const QUERY = gql`
  query EditCarModelMakeById($id: Int!) {
    carModelMake: carModelMake(id: $id) {
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
const UPDATE_CAR_MODEL_MAKE_MUTATION = gql`
  mutation UpdateCarModelMakeMutation($id: Int!, $input: UpdateCarModelMakeInput!) {
    updateCarModelMake(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ carModelMake }: CellSuccessProps<EditCarModelMakeById>) => {
  const [updateCarModelMake, { loading, error }] = useMutation(
    UPDATE_CAR_MODEL_MAKE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CarModelMake updated')
        navigate(routes.carModelMakes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCarModelMakeInput,
    id: EditCarModelMakeById['carModelMake']['id']
  ) => {
    updateCarModelMake({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit CarModelMake {carModelMake?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CarModelMakeForm carModelMake={carModelMake} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
