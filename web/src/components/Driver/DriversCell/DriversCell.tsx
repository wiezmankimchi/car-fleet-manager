import { useTranslation, Trans } from 'react-i18next'

import { Form, SelectField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Drivers from 'src/components/Driver/Drivers'
import Pagination from 'src/components/Pagination/Pagination'

export const QUERY = gql`
  query AllDriversPaged($page: Int, $limit: Int) {
    allDrivers(page: $page, limit: $limit) {
      count
      drivers {
        id
        name
        email
        phone
        dob
        registrationNumber
        registrationEndDate
        registrationImageURL
        companyId
        createdAt
        updateAt
        createdBy
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
      }
    }
  }
`
// export const QUERY = gql`
//   query FindDrivers {
//     drivers {
//       id
//       name
//       email
//       phone
//       dob
//       companyId
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

export const isEmpty = (data) => {
  return data?.allDrivers.drivers.length === 0
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const { t, i18n } = useTranslation()
  document.body.dir = i18n.dir()
  return (
    <div className="rw-text-center">
      {t('No drivers yet. ')}
      <Link to={routes.newDriver()} className="rw-link">
        <Trans i18nKey={'CreateOneMale'}>{t('Create one?')}</Trans>
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  allDrivers,
  page,
  perPage = 5,
  onChange,
}: CellSuccessProps) => {
  const { t, i18n } = useTranslation()
  document.body.dir = i18n.dir()
  return (
    <>
      <Drivers drivers={allDrivers.drivers} count={allDrivers.count} />
      <div className="flex justify-evenly">
        <Pagination
          count={allDrivers.count }
          page={page}
          perPage={perPage ? perPage : 5}
          linkTo={routes.driversPaged}
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
