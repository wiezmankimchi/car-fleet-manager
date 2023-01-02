import { useTranslation } from 'react-i18next'
import type {
  DeleteCompanyMutationVariables,
  FindCompanies,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Company/CompaniesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_COMPANY_MUTATION = gql`
  mutation DeleteCompanyMutation($id: Int!) {
    deleteCompany(id: $id) {
      id
    }
  }
`

const CompaniesList = ({ companies }: FindCompanies) => {
  const { t, i18n } = useTranslation()
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
    if (confirm(t('Are you sure you want to delete company ') + id + '?')) {
      deleteCompany({ variables: { id } })
    }
  }

  document.body.dir = i18n.dir()
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>{t('ID')}</th>
            <th className="w-36">{t('Name')}</th>
            <th>{t('Address')} 1</th>
            <th>{t('Address')} 2</th>
            <th>{t('City')}</th>
            <th>{t('Zipcode')}</th>
            <th>{t('Country')}</th>
            <th>{t('Created At')}</th>
            <th>{t('Updated At')}</th>
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
              <td className="text-center text-xs">
                {timeTag(company.createdAt, i18n.language)}
                <br />
                <Link
                  to={routes.user({ id: company?.createdBy })}
                  className="rw-button rw-button-small"
                >
                  {truncate(company?.createdByUser?.firstName)}{' '}
                  {truncate(company?.createdByUser?.lastName)}
                </Link>
              </td>
              <td className="text-center">
                {timeTag(company.updateAt, i18n.language)}
                <br />
                <Link
                  to={routes.user({ id: company?.updatedBy })}
                  className="rw-button rw-button-small"
                >
                  {truncate(company?.updatedByUser?.firstName)}{' '}
                  {truncate(company?.updatedByUser?.lastName)}
                </Link>
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.company({ id: company.id })}
                    title={'Show company ' + company.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    {t('Show')}
                  </Link>
                  <Link
                    to={routes.editCompany({ id: company.id })}
                    title={'Edit company ' + company.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    {t('Edit')}
                  </Link>
                  <button
                    type="button"
                    title={'Delete company ' + company.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(company.id)}
                  >
                    {t('Delete')}
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
