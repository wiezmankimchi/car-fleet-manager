import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserCompany/UserCompaniesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteUserCompanyMutationVariables, FindUserCompanies } from 'types/graphql'

const DELETE_USER_COMPANY_MUTATION = gql`
  mutation DeleteUserCompanyMutation($id: Int!) {
    deleteUserCompany(id: $id) {
      id
    }
  }
`

const UserCompaniesList = ({ userCompanies }: FindUserCompanies) => {
  const [deleteUserCompany] = useMutation(DELETE_USER_COMPANY_MUTATION, {
    onCompleted: () => {
      toast.success('UserCompany deleted')
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

  const onDeleteClick = (id: DeleteUserCompanyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userCompany ' + id + '?')) {
      deleteUserCompany({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Company id</th>
            <th>Created at</th>
            <th>Update at</th>
            <th>Created by</th>
            <th>Updated by</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userCompanies.map((userCompany) => (
            <tr key={userCompany.id}>
              <td>{truncate(userCompany.id)}</td>
              <td>{truncate(userCompany.companyId)}</td>
              <td>{timeTag(userCompany.createdAt)}</td>
              <td>{timeTag(userCompany.updateAt)}</td>
              <td>{truncate(userCompany.createdBy)}</td>
              <td>{truncate(userCompany.updatedBy)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userCompany({ id: userCompany.id })}
                    title={'Show userCompany ' + userCompany.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserCompany({ id: userCompany.id })}
                    title={'Edit userCompany ' + userCompany.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete userCompany ' + userCompany.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userCompany.id)}
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

export default UserCompaniesList
