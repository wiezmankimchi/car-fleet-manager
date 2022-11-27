import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Company/CompaniesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteCompanyMutationVariables, FindCompanies } from 'types/graphql'

const DELETE_COMPANY_MUTATION = gql`
  mutation DeleteCompanyMutation($id: Int!) {
    deleteCompany(id: $id) {
      id
    }
  }
`

const CompaniesList = ({ companies }: FindCompanies) => {
  const [deleteCompany] = useMutation(DELETE_COMPANY_MUTATION, {
    onCompleted: () => {
      toast.success('Company deleted')
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

  const onDeleteClick = (id: DeleteCompanyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete company ' + id + '?')) {
      deleteCompany({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address1</th>
            <th>Address2</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Country</th>
            <th>Created at</th>
            <th>Update at</th>
            <th>Created by</th>
            <th>Updated by</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{truncate(company.id)}</td>
              <td>{truncate(company.name)}</td>
              <td>{truncate(company.address1)}</td>
              <td>{truncate(company.address2)}</td>
              <td>{truncate(company.city)}</td>
              <td>{truncate(company.zipcode)}</td>
              <td>{truncate(company.country)}</td>
              <td>{timeTag(company.createdAt)}</td>
              <td>{timeTag(company.updateAt)}</td>
              <td>{truncate(company.createdBy)}</td>
              <td>{truncate(company.updatedBy)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.company({ id: company.id })}
                    title={'Show company ' + company.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCompany({ id: company.id })}
                    title={'Edit company ' + company.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete company ' + company.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(company.id)}
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

export default CompaniesList
