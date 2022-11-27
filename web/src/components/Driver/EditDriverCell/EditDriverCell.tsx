import type { EditDriverById, UpdateDriverInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DriverForm from 'src/components/Driver/DriverForm'

export const QUERY = gql`
  query EditDriverById($id: Int!) {
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
const UPDATE_DRIVER_MUTATION = gql`
  mutation UpdateDriverMutation($id: Int!, $input: UpdateDriverInput!) {
    updateDriver(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ driver }: CellSuccessProps<EditDriverById>) => {
  const [updateDriver, { loading, error }] = useMutation(
    UPDATE_DRIVER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Driver updated')
        navigate(routes.drivers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateDriverInput,
    id: EditDriverById['driver']['id']
  ) => {
    updateDriver({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Driver {driver?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <DriverForm driver={driver} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
