import { useTranslation, Trans } from 'react-i18next'

import { Form, SelectField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CarModelMakes from 'src/components/CarModelMake/CarModelMakes'
import Pagination from 'src/components/Pagination/Pagination'

export const beforeQuery = ({ page, perPage }) => {
  page = page ? parseInt(page) : 1
  perPage = perPage ? parseInt(perPage) : 5
  return { variables: { page: page, limit: perPage } }
}

export const QUERY = gql`
  query AllMakeModelsPaged($page: Int, $limit: Int) {
    allMakeModels(page: $page, limit: $limit) {
      count
      makeModels {
        id
        name
        carMakeId
        createdAt
        createdBy
        updateAt
        updatedBy
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
        make {
          id
          name
        }
      }
    }
  }
`

// export const QUERY = gql`
//   query FindCarModelMakes {
//     carModelMakes {
//       id
//       name
//       createdAt
//       updateAt
//       createdBy
//       updatedBy
//       carMakeId
//     }
//   }
// `

export const Loading = () => <div>Loading...</div>

export const isEmpty = (data) => {
  return data?.allMakeModels.makeModels.length === 0
}

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {t('No Car Models yet. ')}
      <Link to={routes.newCarModelMake()} className="rw-link">
        <Trans i18nKey={'CreateOneMale'}>Create One?</Trans>
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  allMakeModels,
  page,
  perPage = 5,
  onChange,
}: CellSuccessProps) => {
  const { t, i18n } = useTranslation()

  document.body.dir = i18n.dir()
  return (
    <>
      <CarModelMakes
        carModelMakes={allMakeModels.makeModels}
        count={allMakeModels.count}
      />
      <div className="flex justify-evenly">
        <Pagination
          count={allMakeModels.count}
          page={page}
          perPage={perPage ? perPage : 5}
          linkTo={routes.carModelMakesPage}
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
