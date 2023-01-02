import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Car/CarsCell'
import { timeTag, truncate, consoler } from 'src/lib/formatters'

import type { DeleteCarMutationVariables, FindCars } from 'types/graphql'

const DELETE_CAR_MUTATION = gql`
  mutation DeleteCarMutation($id: Int!) {
    deleteCar(id: $id) {
      id
    }
  }
`

const CarsList = ({ cars }: FindCars) => {
  const [deleteCar] = useMutation(DELETE_CAR_MUTATION, {
    onCompleted: () => {
      toast.success('Car deleted')
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

  const onDeleteClick = (id: DeleteCarMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete car ' + id + '?')) {
      deleteCar({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Registrtion</th>
            <th>Reg date</th>
            <th>Make id</th>
            <th>Driver id</th>
            <th>Company id</th>
            <th>Created at</th>
            <th>Update at</th>
            <th>Created by</th>
            <th>Updated by</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{truncate(car.id)}</td>
              <td>{truncate(car.registrtion)}</td>
              <td>{timeTag(car.regDate)}</td>
              <td>{truncate(car.makeId)}</td>
              <td>{truncate(car.driverId)}</td>
              <td>{truncate(car.companyId)}</td>
              <td>{timeTag(car.createdAt)}</td>
              <td>{timeTag(car.updateAt)}</td>
              <td>{truncate(car.createdBy)}</td>
              <td>{truncate(car.updatedBy)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.car({ id: car.id })}
                    title={'Show car ' + car.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCar({ id: car.id })}
                    title={'Edit car ' + car.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete car ' + car.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(car.id)}
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

export default CarsList
