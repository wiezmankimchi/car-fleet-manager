import { useState } from 'react'

import { Form, SelectField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

import AllModelCell from 'src/components/AllModelsCell'


const AllModelsPage = ({ page, limit }) => {
  const [pageLimit, setPageLimit] = useState(limit)

  const onChangeLimit = (newLimit) => {
    setPageLimit(newLimit)
    navigate(routes.allModelsPage({ page: 1, limit: newLimit }))
  }
  return (
    <>
      <div>page:{page}</div>
      <div>limit:{limit}</div>
      <AllModelCell page={page} perPage={pageLimit} onChange={onChangeLimit} />
    </>
  )
}

export default AllModelsPage
