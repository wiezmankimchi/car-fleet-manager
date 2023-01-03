import type { FindCarModelsLOV } from 'types/graphql'

import { SelectField } from '@redwoodjs/forms'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCarModelsLOV {
    carModels {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>no brands</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  carModels,
  selected,
}: CellSuccessProps<FindCarModelsLOV>) => {
  return (
    <SelectField name="carMakeId" className="form-select">
      {carModels.map((model) => (
        <option
          key={model.id}
          value={model.id}
          selected={model.id === selected ? true : false}
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          {model.name}
        </option>
      ))}
    </SelectField>
  )
}
