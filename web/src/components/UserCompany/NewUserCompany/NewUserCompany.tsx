import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserCompanyForm from 'src/components/UserCompany/UserCompanyForm'

import type { CreateUserCompanyInput } from 'types/graphql'

const CREATE_USER_COMPANY_MUTATION = gql`
  mutation CreateUserCompanyMutation($input: CreateUserCompanyInput!) {
    createUserCompany(input: $input) {
      id
    }
  }
`

const NewUserCompany = () => {
  const [createUserCompany, { loading, error }] = useMutation(
    CREATE_USER_COMPANY_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserCompany created')
        navigate(routes.userCompanies())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateUserCompanyInput) => {
    createUserCompany({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserCompany</h2>
      </header>
      <div className="rw-segment-main">
        <UserCompanyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserCompany
