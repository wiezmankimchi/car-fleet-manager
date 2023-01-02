import { Trans, useTranslation } from 'react-i18next'
import type {
  DeleteCompanyMutationVariables,
  FindCompanyById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_COMPANY_MUTATION = gql`
  mutation DeleteCompanyMutation($id: Int!) {
    deleteCompany(id: $id) {
      id
    }
  }
`

interface Props {
  company: NonNullable<FindCompanyById['company']>
}

const Company = ({ company }: Props) => {
  const { t } = useTranslation()
  const [deleteCompany] = useMutation(DELETE_COMPANY_MUTATION, {
    onCompleted: () => {
      toast.success('Company deleted')
      navigate(routes.companies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCompanyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete company ' + id + '?')) {
      deleteCompany({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            <Trans i18nKey="Company Detail">
              Company {{ companyID: company.id }} Detail
            </Trans>
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>{t('ID')}</th>
              <td>{company.id}</td>
            </tr>
            <tr>
              <th>{t('Name')}</th>
              <td>{company.name}</td>
            </tr>
            <tr>
              <th>{t('Address')} 1</th>
              <td>{company.address1}</td>
            </tr>
            <tr>
              <th>{t('Address')} 2</th>
              <td>{company.address2}</td>
            </tr>
            <tr>
              <th>{t('City')}</th>
              <td>{company.city}</td>
            </tr>
            <tr>
              <th>{t('Zipcode')}</th>
              <td>{company.zipcode}</td>
            </tr>
            <tr>
              <th>{t('Country')}</th>
              <td>{company.country}</td>
            </tr>
            <tr>
              <th>
                {t('Created At')} / {t('Created By')}
              </th>
              <td>
                {timeTag(company.createdAt)} / {company.createdBy}
              </td>
            </tr>
            <tr>
              <th>{t('Updated At')}</th>
              <td>{timeTag(company.updateAt)}</td>
            </tr>

            <tr>
              <th>{t('Updated By')}</th>
              <td>{company.updatedBy}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCompany({ id: company.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(company.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Company
