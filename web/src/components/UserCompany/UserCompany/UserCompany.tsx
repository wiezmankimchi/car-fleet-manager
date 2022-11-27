
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteUserCompanyMutationVariables, FindUserCompanyById } from 'types/graphql'

const DELETE_USER_COMPANY_MUTATION = gql`
  mutation DeleteUserCompanyMutation($id: Int!) {
    deleteUserCompany(id: $id) {
      id
    }
  }
`

interface Props {
  userCompany: NonNullable<FindUserCompanyById['userCompany']>
}

const UserCompany = ({ userCompany }: Props) => {
  const [deleteUserCompany] = useMutation(DELETE_USER_COMPANY_MUTATION, {
    onCompleted: () => {
      toast.success('UserCompany deleted')
      navigate(routes.userCompanies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteUserCompanyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userCompany ' + id + '?')) {
      deleteUserCompany({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserCompany {userCompany.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userCompany.id}</td>
            </tr><tr>
              <th>Company id</th>
              <td>{userCompany.companyId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(userCompany.createdAt)}</td>
            </tr><tr>
              <th>Update at</th>
              <td>{timeTag(userCompany.updateAt)}</td>
            </tr><tr>
              <th>Created by</th>
              <td>{userCompany.createdBy}</td>
            </tr><tr>
              <th>Updated by</th>
              <td>{userCompany.updatedBy}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserCompany({ id: userCompany.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userCompany.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserCompany
