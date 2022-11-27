import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CarModel/CarModelsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteCarModelMutationVariables, FindCarModels } from 'types/graphql'

const DELETE_CAR_MODEL_MUTATION = gql`
  mutation DeleteCarModelMutation($id: Int!) {
    deleteCarModel(id: $id) {
      id
    }
  }
`

const CarModelsList = ({ carModels }: FindCarModels) => {
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
    if (confirm('Are you sure you want to delete carModel ' + id + '?')) {
      deleteCarModel({ variables: { id } })
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
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {carModels.map((carModel) => (
            <tr key={carModel.id}>
              <td>{truncate(carModel.id)}</td>
              <td>{truncate(carModel.name)}</td>
              <td>{timeTag(carModel.createdAt)}</td>
              <td>{timeTag(carModel.updateAt)}</td>
              <td>{truncate(carModel.createdBy)}</td>
              <td>{truncate(carModel.updatedBy)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.carModel({ id: carModel.id })}
                    title={'Show carModel ' + carModel.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCarModel({ id: carModel.id })}
                    title={'Edit carModel ' + carModel.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete carModel ' + carModel.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(carModel.id)}
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

export default CarModelsList
