import type { EditUserCompanyById, UpdateUserCompanyInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserCompanyForm from 'src/components/UserCompany/UserCompanyForm'

export const QUERY = gql`
  query EditUserCompanyById($id: Int!) {
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
const UPDATE_USER_COMPANY_MUTATION = gql`
  mutation UpdateUserCompanyMutation($id: Int!, $input: UpdateUserCompanyInput!) {
    updateUserCompany(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userCompany }: CellSuccessProps<EditUserCompanyById>) => {
  const [updateUserCompany, { loading, error }] = useMutation(
    UPDATE_USER_COMPANY_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserCompany updated')
        navigate(routes.userCompanies())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateUserCompanyInput,
    id: EditUserCompanyById['userCompany']['id']
  ) => {
    updateUserCompany({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit UserCompany {userCompany?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UserCompanyForm userCompany={userCompany} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
