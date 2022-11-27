
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteUserRoleMutationVariables, FindUserRoleById } from 'types/graphql'

const DELETE_USER_ROLE_MUTATION = gql`
  mutation DeleteUserRoleMutation($id: Int!) {
    deleteUserRole(id: $id) {
      id
    }
  }
`

interface Props {
  userRole: NonNullable<FindUserRoleById['userRole']>
}

const UserRole = ({ userRole }: Props) => {
  const [deleteUserRole] = useMutation(DELETE_USER_ROLE_MUTATION, {
    onCompleted: () => {
      toast.success('UserRole deleted')
      navigate(routes.userRoles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteUserRoleMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userRole ' + id + '?')) {
      deleteUserRole({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserRole {userRole.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userRole.id}</td>
            </tr><tr>
              <th>User id</th>
              <td>{userRole.userId}</td>
            </tr><tr>
              <th>Role id</th>
              <td>{userRole.roleId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(userRole.createdAt)}</td>
            </tr><tr>
              <th>Update at</th>
              <td>{timeTag(userRole.updateAt)}</td>
            </tr><tr>
              <th>Created by</th>
              <td>{userRole.createdBy}</td>
            </tr><tr>
              <th>Updated by</th>
              <td>{userRole.updatedBy}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserRole({ id: userRole.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userRole.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserRole
