import type { EditUserRoleById, UpdateUserRoleInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserRoleForm from 'src/components/UserRole/UserRoleForm'

export const QUERY = gql`
  query EditUserRoleById($id: Int!) {
    userRole: userRole(id: $id) {
      id
      userId
      roleId
      createdAt
      updateAt
      createdBy
      updatedBy
    }
  }
`
const UPDATE_USER_ROLE_MUTATION = gql`
  mutation UpdateUserRoleMutation($id: Int!, $input: UpdateUserRoleInput!) {
    updateUserRole(id: $id, input: $input) {
      id
      userId
      roleId
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

export const Success = ({ userRole }: CellSuccessProps<EditUserRoleById>) => {
  const [updateUserRole, { loading, error }] = useMutation(
    UPDATE_USER_ROLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserRole updated')
        navigate(routes.userRoles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateUserRoleInput,
    id: EditUserRoleById['userRole']['id']
  ) => {
    updateUserRole({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit UserRole {userRole?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UserRoleForm userRole={userRole} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
