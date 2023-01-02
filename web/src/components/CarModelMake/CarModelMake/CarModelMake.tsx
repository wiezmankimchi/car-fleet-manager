
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,consoler  } from 'src/lib/formatters'

import type { DeleteCarModelMakeMutationVariables, FindCarModelMakeById } from 'types/graphql'

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

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CarModelMake {carModelMake.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{carModelMake.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{carModelMake.name}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(carModelMake.createdAt)}</td>
            </tr><tr>
              <th>Update at</th>
              <td>{timeTag(carModelMake.updateAt)}</td>
            </tr><tr>
              <th>Created by</th>
              <td>{carModelMake.createdBy}</td>
            </tr><tr>
              <th>Updated by</th>
              <td>{carModelMake.updatedBy}</td>
            </tr><tr>
              <th>Car make id</th>
              <td>{carModelMake.carMakeId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCarModelMake({ id: carModelMake.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(carModelMake.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CarModelMake
