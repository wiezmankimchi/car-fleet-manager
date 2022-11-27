import type { FindUserCompanies } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserCompanies from 'src/components/UserCompany/UserCompanies'

export const QUERY = gql`
  query FindUserCompanies {
    userCompanies {
      id
      companyId
      createdAt
      updateAt
      createdBy
      updatedBy
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userCompanies yet. '}
      <Link
        to={routes.newUserCompany()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userCompanies }: CellSuccessProps<FindUserCompanies>) => {
  return <UserCompanies userCompanies={userCompanies} />
}
