import { useTranslation, Trans } from 'react-i18next'
import type { DeleteDriverMutationVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Driver/DriversCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_DRIVER_MUTATION = gql`
  mutation DeleteDriverMutation($id: Int!) {
    deleteDriver(id: $id) {
      id
    }
  }
`

const DriversList = ({ drivers, count }) => {
  const { t, i18n } = useTranslation()
  const [deleteDriver] = useMutation(DELETE_DRIVER_MUTATION, {
    onCompleted: () => {
      toast.success('Driver deleted')
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

  const onDeleteClick = (id: DeleteDriverMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete driver ' + id + '?')) {
      deleteDriver({ variables: { id } })
    }
  }

  document.body.dir = i18n.dir()
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>{t('ID')}</th>
            <th>{t('Name')}</th>
            <th>{t('Email')}</th>
            <th>{t('Phone')}</th>
            <th>{t('DOB')}</th>
            <th>{t('Reg. Number')}</th>
            <th>{t('Reg. End Date')}</th>
            <th>{t('Reg. Image')}</th>
            <th>{t('Company')}</th>
            <th>{t('Created At')}</th>
            <th>{t('Updated At')}</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{truncate(driver.id)}</td>
              <td>{truncate(driver.name)}</td>
              <td>{truncate(driver.email)}</td>
              <td>{truncate(driver.phone)}</td>
              <td>{timeTag(driver.dob, i18n.language)}</td>
              <td>{truncate(driver.registrationNumber)}</td>
              <td>{timeTag(driver.registrationEndDate, i18n.language)}</td>
              <td>{truncate(driver.registrationImageURL)}</td>
              <td>{truncate(driver.companyId)}</td>
              <td className="text-center text-xs">
                {timeTag(driver.createdAt, i18n.language)}
                <br />
                <Link
                  to={routes.user({ id: driver?.createdBy })}
                  className="rw-button rw-button-small"
                >
                  {truncate(driver?.createdByUser?.firstName)}{' '}
                  {truncate(driver?.createdByUser?.lastName)}
                </Link>
              </td>
              <td className="text-center text-xs">
                {timeTag(driver.updateAt, i18n.language)}
                <br />
                <Link
                  to={routes.user({ id: driver?.updatedBy })}
                  className="rw-button rw-button-small"
                >
                  {truncate(driver?.updatedByUser?.firstName)}{' '}
                  {truncate(driver?.updatedByUser?.lastName)}
                </Link>
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.driver({ id: driver.id })}
                    title={'Show driver ' + driver.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    {t('Show')}
                  </Link>
                  <Link
                    to={routes.editDriver({ id: driver.id })}
                    title={'Edit driver ' + driver.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    {t('Edit')}
                  </Link>
                  <button
                    type="button"
                    title={'Delete driver ' + driver.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(driver.id)}
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

export default DriversList
