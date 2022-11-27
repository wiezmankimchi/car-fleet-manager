import type { FindUserCompanyById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserCompany from 'src/components/UserCompany/UserCompany'

export const QUERY = gql`
  query FindUserCompanyById($id: Int!) {
    userCompany: userCompany(id: $id) {
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

export const Empty = () => <div>UserCompany not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userCompany }: CellSuccessProps<FindUserCompanyById>) => {
  return <UserCompany userCompany={userCompany} />
}
