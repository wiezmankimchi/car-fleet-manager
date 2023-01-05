// import type { FindCompanyLOVQuery, FindCompanyLOVQueryVariables } from 'types/graphql'
import { FindCompaniesLOV } from 'types/graphql'

import { SelectField } from '@redwoodjs/forms'
import { CellSuccessProps } from '@redwoodjs/web'
// import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCompaniesLOV {
    companies {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>no companies</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  companies,
  selected,
}: CellSuccessProps<FindCompaniesLOV>) => {
  return (
    <SelectField name="companyId" className="form-select">
      {companies.map((company) => (
        <option
          key={company.id}
          value={company.id}
          selected={company.id === selected ? true : false}
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          {company.name}
        </option>
      ))}
    </SelectField>
  )
}
