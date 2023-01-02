import { Trans, useTranslation } from 'react-i18next'
import type {
  DeleteCarModelMutationVariables,
  FindCarModelById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag, truncate, consoler } from 'src/lib/formatters'

const DELETE_CAR_MODEL_MUTATION = gql`
  mutation DeleteCarModelMutation($id: Int!) {
    deleteCarModel(id: $id) {
      id
    }
  }
`

interface Props {
  carModel: NonNullable<FindCarModelById['carModel']>
}

const CarModel = ({ carModel }: Props) => {
  const { t, i18n } = useTranslation()
  const [deleteCarModel] = useMutation(DELETE_CAR_MODEL_MUTATION, {
    onCompleted: () => {
      toast.success('Car Brand deleted')
      navigate(routes.carModels())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCarModelMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete Car Brand ' + id + '?')) {
      deleteCarModel({ variables: { id } })
    }
  }

  document.body.dir = i18n.dir()
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            <Trans i18nKey="carBrandDetails">
              Car Brand{{ carModelID: carModel.id }} Details
            </Trans>
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>{t('ID')}</th>
              <td>{carModel.id}</td>
            </tr>
            <tr>
              <th>{t('Name')}</th>
              <td>{carModel.name}</td>
            </tr>
            <tr>
              <th>{t('Created At')}</th>

              <td className="text-xs">
                {timeTag(carModel.createdAt, i18n.language)}
                <Link
                  to={routes.user({ id: carModel?.createdBy })}
                  className="m-3 text-xs"
                >
                  {truncate(carModel?.createdByUser?.firstName)}{' '}
                  {truncate(carModel?.createdByUser?.lastName)}
                </Link>
              </td>
            </tr>

            <tr>
              <th>{t('Updated At')}</th>
              <td className="text-xs">
                {timeTag(carModel.updateAt, i18n.language)}
                <Link
                  to={routes.user({ id: carModel?.updatedBy })}
                  className="m-3 text-xs"
                >
                  {truncate(carModel?.updatedByUser?.firstName)}{' '}
                  {truncate(carModel?.updatedByUser?.lastName)}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCarModel({ id: carModel.id })}
          className="rw-button rw-button-blue"
        >
          {t('Edit')}
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(carModel.id)}
        >
          {t('Delete')}
        </button>
      </nav>
    </>
  )
}

export default CarModel
