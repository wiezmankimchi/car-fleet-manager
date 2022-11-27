import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Driver/DriversCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteDriverMutationVariables, FindDrivers } from 'types/graphql'

const DELETE_DRIVER_MUTATION = gql`
  mutation DeleteDriverMutation($id: Int!) {
    deleteDriver(id: $id) {
      id
    }
  }
`

const DriversList = ({ drivers }: FindDrivers) => {
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

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Dob</th>
            <th>Company id</th>
            <th>Created at</th>
            <th>Update at</th>
            <th>Created by</th>
            <th>Updated by</th>
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
              <td>{timeTag(driver.dob)}</td>
              <td>{truncate(driver.companyId)}</td>
              <td>{timeTag(driver.createdAt)}</td>
              <td>{timeTag(driver.updateAt)}</td>
              <td>{truncate(driver.createdBy)}</td>
              <td>{truncate(driver.updatedBy)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.driver({ id: driver.id })}
                    title={'Show driver ' + driver.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDriver({ id: driver.id })}
                    title={'Edit driver ' + driver.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete driver ' + driver.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(driver.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DriversList
