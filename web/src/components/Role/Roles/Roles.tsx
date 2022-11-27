import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Role/RolesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteRoleMutationVariables, FindRoles } from 'types/graphql'

const DELETE_ROLE_MUTATION = gql`
  mutation DeleteRoleMutation($id: Int!) {
    deleteRole(id: $id) {
      id
    }
  }
`

const RolesList = ({ roles }: FindRoles) => {
  const [deleteRole] = useMutation(DELETE_ROLE_MUTATION, {
    onCompleted: () => {
      toast.success('Role deleted')
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

  const onDeleteClick = (id: DeleteRoleMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete role ' + id + '?')) {
      deleteRole({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Created at</th>
            <th>Update at</th>
            <th>Created by</th>
            <th>Updated by</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{truncate(role.id)}</td>
              <td>{truncate(role.name)}</td>
              <td>{timeTag(role.createdAt)}</td>
              <td>{timeTag(role.updateAt)}</td>
              <td>{truncate(role.createdBy)}</td>
              <td>{truncate(role.updatedBy)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.role({ id: role.id })}
                    title={'Show role ' + role.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRole({ id: role.id })}
                    title={'Edit role ' + role.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete role ' + role.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(role.id)}
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

export default RolesList
