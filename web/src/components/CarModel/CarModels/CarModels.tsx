import { useTranslation, Trans } from 'react-i18next'
import type {
  DeleteCarModelMutationVariables,
  FindCarModels,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CarModel/CarModelsCell'
import { timeTag, truncate, consoler } from 'src/lib/formatters'

const DELETE_CAR_MODEL_MUTATION = gql`
  mutation DeleteCarModelMutation($id: Int!) {
    deleteCarModel(id: $id) {
      id
    }
  }
`

const CarModelsList = ({ carModels, count }: FindCarModels) => {
  const { t, i18n } = useTranslation()

  const [deleteCarModel] = useMutation(DELETE_CAR_MODEL_MUTATION, {
    onCompleted: () => {
      toast.success('CarModel deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteCarModelMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete Car Brand ' + id + '?')) {
      deleteCarModel({ variables: { id } })
    }
  }

  // consoler({ where: 'CarModel 45', value: carModels })

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>{t('ID')}</th>
            <th>{t('Name')}</th>
            <th>{t('Created At')}</th>
            <th>{t('Updated At')}</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {carModels.map((carModel) => (
            <tr key={carModel.id}>
              <td>{truncate(carModel.id)}</td>
              <td>{truncate(carModel.name)}</td>
              <td className="text-center text-xs">
                {timeTag(carModel.createdAt, i18n.language)}
                <br />
                <Link
                  to={routes.user({ id: carModel?.createdBy })}
                  className="rw-button rw-button-small"
                >
                  {truncate(carModel?.createdByUser?.firstName)}{' '}
                  {truncate(carModel?.createdByUser?.lastName)}
                </Link>
              </td>
              <td className="text-center text-xs">
                {timeTag(carModel.updateAt, i18n.language)}
                <br />
                <Link
                  to={routes.user({ id: carModel?.updatedBy })}
                  className="rw-button rw-button-small"
                >
                  {truncate(carModel?.updatedByUser?.firstName)}{' '}
                  {truncate(carModel?.updatedByUser?.lastName)}
                </Link>
              </td>

              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.carModel({ id: carModel.id })}
                    title={'Show carModel ' + carModel.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    {t('Show')}
                  </Link>
                  <Link
                    to={routes.editCarModel({ id: carModel.id })}
                    title={'Edit carModel ' + carModel.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    {t('Edit')}
                  </Link>
                  <button
                    type="button"
                    title={'Delete carModel ' + carModel.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(carModel.id)}
                  >
                    {t('Delete')}
                  </button>
                </nav>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="5">
              <Trans i18nKey={'recordCount'}>
                There are:{{ totalCount: count }} records
              </Trans>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CarModelsList
