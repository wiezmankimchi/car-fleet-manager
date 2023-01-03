import { useTranslation } from 'react-i18next'
import type { CreateCarModelMakeInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CarModelMakeForm from 'src/components/CarModelMake/CarModelMakeForm'
import CarModelMakesCell from '../CarModelMakesCell'

const CREATE_CAR_MODEL_MAKE_MUTATION = gql`
  mutation CreateCarModelMakeMutation($input: CreateCarModelMakeInput!) {
    createCarModelMake(input: $input) {
      id
    }
  }
`

const NewCarModelMake = () => {
  const { t } = useTranslation()
  const { currentUser } = useAuth()
  const [createCarModelMake, { loading, error }] = useMutation(
    CREATE_CAR_MODEL_MAKE_MUTATION,
    {
      onCompleted: () => {
        toast.success(t('Car Model created'))
        navigate(routes.carModelMakes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCarModelMakeInput) => {
    input.createdBy = currentUser.id
    input.updatedBy = null
    input.updateAt = null
    createCarModelMake({ variables: { input } })
  }

  console.log
  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          {t('New Car Model')}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CarModelMakeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCarModelMake
