import { useTranslation, Trans } from 'react-i18next'
import type {
  DeleteCarModelMakeMutationVariables,
  FindCarModelMakeById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag, truncate, consoler } from 'src/lib/formatters'

const DELETE_CAR_MODEL_MAKE_MUTATION = gql`
  mutation DeleteCarModelMakeMutation($id: Int!) {
    deleteCarModelMake(id: $id) {
      id
    }
  }
`

interface Props {
  carModelMake: NonNullable<FindCarModelMakeById['carModelMake']>
}

const CarModelMake = ({ carModelMake }: Props) => {
  const { t, i18n } = useTranslation()
  const [deleteCarModelMake] = useMutation(DELETE_CAR_MODEL_MAKE_MUTATION, {
    onCompleted: () => {
      toast.success('CarModelMake deleted')
      navigate(routes.carModelMakes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCarModelMakeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete carModelMake ' + id + '?')) {
      deleteCarModelMake({ variables: { id } })
    }
  }

  document.body.dir = i18n.dir()
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            <Trans i18nKey={'CarModelDetails'}>
              Car Model {{ carModelID: carModelMake.id }} Detail
            </Trans>
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>{t('ID')}</th>
              <td>{carModelMake.id}</td>
            </tr>
            <tr>
              <th>{t('Model')}</th>
              <td>{carModelMake.name}</td>
            </tr>
            <tr>
              <th>{t('Brand')}</th>
              <td>{carModelMake.make.name}</td>
            </tr>
            <tr>
              <th>{t('Created At')}</th>
              <td className="flex text-xs">
                <div className="justify-start py-2">
                  {timeTag(carModelMake.createdAt, i18n.language)}
                </div>
                <Link
                  to={routes.user({ id: carModelMake?.createdBy })}
                  className="rw-button mx-4 w-32 justify-start p-1"
                >
                  {truncate(carModelMake?.createdByUser?.firstName)}{' '}
                  {truncate(carModelMake?.createdByUser?.lastName)}
                </Link>
              </td>
            </tr>
            <tr>
              <th>{t('Updated At')}</th>
              <td className="flex text-xs">
                <div className="justify-start py-2">
                  {timeTag(carModelMake.updateAt, i18n.language)}
                </div>
                <Link
                  to={routes.user({ id: carModelMake?.updatedBy })}
                  className="rw-button mx-4 w-32 justify-start p-1"
                >
                  {truncate(carModelMake?.updatedByUser?.firstName)}{' '}
                  {truncate(carModelMake?.updatedByUser?.lastName)}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCarModelMake({ id: carModelMake.id })}
          className="rw-button rw-button-blue"
        >
          {t('Edit')}
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(carModelMake.id)}
        >
          {t('Delete')}
        </button>
      </nav>
    </>
  )
}

export default CarModelMake
