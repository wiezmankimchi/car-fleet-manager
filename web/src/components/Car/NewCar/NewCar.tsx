import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CarForm from 'src/components/Car/CarForm'

import type { CreateCarInput } from 'types/graphql'

const CREATE_CAR_MUTATION = gql`
  mutation CreateCarMutation($input: CreateCarInput!) {
    createCar(input: $input) {
      id
    }
  }
`

const NewCar = () => {
  const [createCar, { loading, error }] = useMutation(
    CREATE_CAR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Car created')
        navigate(routes.cars())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCarInput) => {
    createCar({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Car</h2>
      </header>
      <div className="rw-segment-main">
        <CarForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCar
