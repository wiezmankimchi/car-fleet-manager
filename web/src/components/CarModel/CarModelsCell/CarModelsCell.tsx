import { useTranslation } from 'react-i18next'
// import type { Query } from 'types/graphql'

import { Form, SelectField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps } from '@redwoodjs/web'

import CarModels from 'src/components/CarModel/CarModels'
import Pagination from 'src/components/Pagination/Pagination'

export const beforeQuery = ({ page, perPage }) => {
  page = page ? parseInt(page) : 1
  perPage = perPage ? parseInt(perPage) : 5
  return { variables: { page: page, limit: perPage } }
}

export const QUERY = gql`
  query AllModelsPaged($page: Int, $limit: Int) {
    allModels(page: $page, limit: $limit) {
      models {
        id
        name
        createdBy
        updatedBy
        createdAt
        updateAt
        createdByUser {
          id
          firstName
          lastName
        }
        updatedByUser {
          id
          firstName
          lastName
        }
      }
      count
    }
  }
`

// export const QUERY = gql`
//   query FindCarModels {
//     carModels {
//       id
//       name
//       createdAt
//       updateAt
//       createdBy
//       updatedBy
//       createdByUser {
//         id
//         firstName
//         lastName
//       }
//       updatedByUser {
//         id
//         firstName
//         lastName
//       }
//     }
//   }
// `

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No Car Brand yet. '}
      <Link to={routes.newCarModel()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

// export const Success = ({ carModels }: CellSuccessProps<FindCarModels>) => {
//   return <CarModels carModels={carModels} />
// }

export const Success = ({ allModels, page, perPage = 5, onChange }) => {
  const { t, i18n } = useTranslation()

  document.body.dir = i18n.dir()
  return (
    <>
      <CarModels carModels={allModels.models} count={allModels.count} />
      <div className="flex justify-evenly">
        <Pagination
          count={allModels.count}
          page={page}
          perPage={perPage ? perPage : 5}
          linkTo={routes.carModelsPage}
        />
        <div className="flex">
          <div className="page-link relative block rounded-md border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none">
            {t('Records per Page')}:
          </div>
          <Form>
            <SelectField
              className="absolute z-10 flex-col justify-start rounded-md  border py-1.5 px-3 align-middle  text-gray-600"
              name="perPage"
              multiple={false}
              value={perPage}
              onChange={(e) => onChange(parseInt(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </SelectField>
          </Form>
        </div>
      </div>
    </>
  )
}
