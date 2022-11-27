import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserRoleForm from 'src/components/UserRole/UserRoleForm'

import type { CreateUserRoleInput } from 'types/graphql'

const CREATE_USER_ROLE_MUTATION = gql`
  mutation CreateUserRoleMutation($input: CreateUserRoleInput!) {
    createUserRole(input: $input) {
      id
    }
  }
`

const NewUserRole = () => {
  const [createUserRole, { loading, error }] = useMutation(
    CREATE_USER_ROLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserRole created')
        navigate(routes.userRoles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateUserRoleInput) => {
    createUserRole({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserRole</h2>
      </header>
      <div className="rw-segment-main">
        <UserRoleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserRole
