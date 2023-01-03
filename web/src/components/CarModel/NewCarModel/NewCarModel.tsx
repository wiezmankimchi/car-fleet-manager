import { renderIntoDocument } from 'react-dom/test-utils'
import { useTranslation } from 'react-i18next'
import type { CreateCarModelInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CarModelForm from 'src/components/CarModel/CarModelForm'

const CREATE_CAR_MODEL_MUTATION = gql`
  mutation CreateCarModelMutation($input: CreateCarModelInput!) {
    createCarModel(input: $input) {
      id
    }
  }
`

const NewCarModel = () => {
  const { t } = useTranslation()
  const { currentUser } = useAuth()
  const [createCarModel, { loading, error }] = useMutation(
    CREATE_CAR_MODEL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Car Brand created')
        navigate(routes.carModels())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCarModelInput) => {
    input.createdBy = currentUser.id
    input.updatedBy = null
    input.updateAt = null
    createCarModel({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          {t('New Car Brand')}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CarModelForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCarModel
