
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteCarModelMutationVariables, FindCarModelById } from 'types/graphql'

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
  const [deleteCarModel] = useMutation(DELETE_CAR_MODEL_MUTATION, {
    onCompleted: () => {
      toast.success('CarModel deleted')
      navigate(routes.carModels())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCarModelMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete carModel ' + id + '?')) {
      deleteCarModel({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CarModel {carModel.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{carModel.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{carModel.name}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(carModel.createdAt)}</td>
            </tr><tr>
              <th>Update at</th>
              <td>{timeTag(carModel.updateAt)}</td>
            </tr><tr>
              <th>Created by</th>
              <td>{carModel.createdBy}</td>
            </tr><tr>
              <th>Updated by</th>
              <td>{carModel.updatedBy}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCarModel({ id: carModel.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(carModel.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CarModel
