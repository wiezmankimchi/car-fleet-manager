import type { EditCarById, UpdateCarInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CarForm from 'src/components/Car/CarForm'

export const QUERY = gql`
  query EditCarById($id: Int!) {
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
const UPDATE_CAR_MUTATION = gql`
  mutation UpdateCarMutation($id: Int!, $input: UpdateCarInput!) {
    updateCar(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ car }: CellSuccessProps<EditCarById>) => {
  const [updateCar, { loading, error }] = useMutation(
    UPDATE_CAR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Car updated')
        navigate(routes.cars())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCarInput,
    id: EditCarById['car']['id']
  ) => {
    updateCar({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Car {car?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CarForm car={car} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
