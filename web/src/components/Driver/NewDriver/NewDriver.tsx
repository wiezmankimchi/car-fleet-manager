import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DriverForm from 'src/components/Driver/DriverForm'

import type { CreateDriverInput } from 'types/graphql'

const CREATE_DRIVER_MUTATION = gql`
  mutation CreateDriverMutation($input: CreateDriverInput!) {
    createDriver(input: $input) {
      id
    }
  }
`

const NewDriver = () => {
  const [createDriver, { loading, error }] = useMutation(
    CREATE_DRIVER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Driver created')
        navigate(routes.drivers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateDriverInput) => {
    createDriver({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Driver</h2>
      </header>
      <div className="rw-segment-main">
        <DriverForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDriver
