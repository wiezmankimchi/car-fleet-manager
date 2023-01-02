import { useTranslation, Trans } from 'react-i18next'
import type { FindCompanies } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Companies from 'src/components/Company/Companies'

export const QUERY = gql`
  query FindCompanies {
    companies {
      id
      name
      address1
      address2
      city
      zipcode
      country
      createdAt
      updateAt
      createdBy
      updatedBy
      createdByUser {
        id
        firstName
        lastName
      }
      updatedByUser {
        id
        firstName
        lastName
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const { t } = useTranslation()
  return (
    <div className="rw-text-center">
      {t('No companies yet. ')}
      <Link to={routes.newCompany()} className="rw-link">
        <Trans i18nKey="CreateOneFemale">Create one?</Trans>
        {/* {'Create one?'} */}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ companies }: CellSuccessProps<FindCompanies>) => {
  return <Companies companies={companies} />
}
