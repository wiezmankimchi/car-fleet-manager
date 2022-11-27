import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CarModelMakeForm from 'src/components/CarModelMake/CarModelMakeForm'

import type { CreateCarModelMakeInput } from 'types/graphql'

const CREATE_CAR_MODEL_MAKE_MUTATION = gql`
  mutation CreateCarModelMakeMutation($input: CreateCarModelMakeInput!) {
    createCarModelMake(input: $input) {
      id
    }
  }
`

const NewCarModelMake = () => {
  const [createCarModelMake, { loading, error }] = useMutation(
    CREATE_CAR_MODEL_MAKE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CarModelMake created')
        navigate(routes.carModelMakes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCarModelMakeInput) => {
    createCarModelMake({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CarModelMake</h2>
      </header>
      <div className="rw-segment-main">
        <CarModelMakeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCarModelMake
