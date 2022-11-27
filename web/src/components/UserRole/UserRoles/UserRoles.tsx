import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserRole/UserRolesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteUserRoleMutationVariables, FindUserRoles } from 'types/graphql'

const DELETE_USER_ROLE_MUTATION = gql`
  mutation DeleteUserRoleMutation($id: Int!) {
    deleteUserRole(id: $id) {
      id
    }
  }
`

const UserRolesList = ({ userRoles }: FindUserRoles) => {
  const [deleteUserRole] = useMutation(DELETE_USER_ROLE_MUTATION, {
    onCompleted: () => {
      toast.success('UserRole deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteUserRoleMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userRole ' + id + '?')) {
      deleteUserRole({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Role id</th>
            <th>Created at</th>
            <th>Update at</th>
            <th>Created by</th>
            <th>Updated by</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userRoles.map((userRole) => (
            <tr key={userRole.id}>
              <td>{truncate(userRole.id)}</td>
              <td>{truncate(userRole.userId)}</td>
              <td>{truncate(userRole.roleId)}</td>
              <td>{timeTag(userRole.createdAt)}</td>
              <td>{timeTag(userRole.updateAt)}</td>
              <td>{truncate(userRole.createdBy)}</td>
              <td>{truncate(userRole.updatedBy)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userRole({ id: userRole.id })}
                    title={'Show userRole ' + userRole.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserRole({ id: userRole.id })}
                    title={'Edit userRole ' + userRole.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete userRole ' + userRole.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userRole.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserRolesList
