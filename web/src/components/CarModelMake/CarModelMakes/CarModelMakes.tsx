import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CarModelMake/CarModelMakesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteCarModelMakeMutationVariables, FindCarModelMakes } from 'types/graphql'

const DELETE_CAR_MODEL_MAKE_MUTATION = gql`
  mutation DeleteCarModelMakeMutation($id: Int!) {
    deleteCarModelMake(id: $id) {
      id
    }
  }
`

const CarModelMakesList = ({ carModelMakes }: FindCarModelMakes) => {
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

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Created at</th>
            <th>Update at</th>
            <th>Created by</th>
            <th>Updated by</th>
            <th>Car make id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {carModelMakes.map((carModelMake) => (
            <tr key={carModelMake.id}>
              <td>{truncate(carModelMake.id)}</td>
              <td>{truncate(carModelMake.name)}</td>
              <td>{timeTag(carModelMake.createdAt)}</td>
              <td>{timeTag(carModelMake.updateAt)}</td>
              <td>{truncate(carModelMake.createdBy)}</td>
              <td>{truncate(carModelMake.updatedBy)}</td>
              <td>{truncate(carModelMake.carMakeId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.carModelMake({ id: carModelMake.id })}
                    title={'Show carModelMake ' + carModelMake.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCarModelMake({ id: carModelMake.id })}
                    title={'Edit carModelMake ' + carModelMake.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete carModelMake ' + carModelMake.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(carModelMake.id)}
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

export default CarModelMakesList
