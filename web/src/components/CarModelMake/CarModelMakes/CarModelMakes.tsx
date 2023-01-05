import { useTranslation, Trans } from 'react-i18next'
import type { DeleteCarModelMakeMutationVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CarModelMake/CarModelMakesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_CAR_MODEL_MAKE_MUTATION = gql`
  mutation DeleteCarModelMakeMutation($id: Int!) {
    deleteCarModelMake(id: $id) {
      id
    }
  }
`

const CarModelMakesList = ({ carModelMakes, count }) => {
  const { t, i18n } = useTranslation()
  const [deleteCarModelMake] = useMutation(DELETE_CAR_MODEL_MAKE_MUTATION, {
    onCompleted: () => {
      toast.success('CarModelMake deleted')
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

  const onDeleteClick = (id: DeleteCarModelMakeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete carModelMake ' + id + '?')) {
      deleteCarModelMake({ variables: { id } })
    }
  }

  document.body.dir = i18n.dir()
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>{t('ID')}</th>
            <th>{t('Model')}</th>
            <th>{t('Brand')}</th>
            <th>{t('Created At')}</th>
            <th>{t('Updated At')}</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {carModelMakes.map((carModelMake) => (
            <tr key={carModelMake.id}>
              <td>{truncate(carModelMake.id)}</td>
              <td>{truncate(carModelMake.name)}</td>
              <td>{truncate(carModelMake.make.name)}</td>
              <td className="text-center text-xs">
                {timeTag(carModelMake.createdAt, i18n.language)}
                <br />
                <Link
                  to={routes.user({ id: carModelMake?.createdBy })}
                  className="rw-button rw-button-small"
                >
                  {truncate(carModelMake?.createdByUser?.firstName)}{' '}
                  {truncate(carModelMake?.createdByUser?.lastName)}
                </Link>
              </td>
              <td className="text-center text-xs">
                {timeTag(carModelMake.updateAt, i18n.language)}
                <br />
                <Link
                  to={routes.user({ id: carModelMake?.updatedBy })}
                  className="rw-button rw-button-small"
                >
                  {truncate(carModelMake?.updatedByUser?.firstName)}{' '}
                  {truncate(carModelMake?.updatedByUser?.lastName)}
                </Link>
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.carModelMake({ id: carModelMake.id })}
                    title={'Show carModelMake ' + carModelMake.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    {t('Show')}
                  </Link>
                  <Link
                    to={routes.editCarModelMake({ id: carModelMake.id })}
                    title={'Edit carModelMake ' + carModelMake.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    {t('Edit')}
                  </Link>
                  <button
                    type="button"
                    title={'Delete carModelMake ' + carModelMake.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(carModelMake.id)}
                  >
                    {t('Delete')}
                  </button>
                </nav>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={5}>
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

export default CarModelMakesList
