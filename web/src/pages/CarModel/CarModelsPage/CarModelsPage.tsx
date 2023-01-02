import { useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import CarModelsCell from 'src/components/CarModel/CarModelsCell'

type AllModesProps = {
  page: number
  limit: number
}

const CarModelsPage = ({ page, limit }: AllModesProps) => {
  const [pageLimit, setPageLimit] = useState(limit)

  const onChangeLimit = (newLimit) => {
    setPageLimit(newLimit)
    navigate(routes.carModelsPage({ page: 1, limit: newLimit }))
  }

  return (
    <>
      <CarModelsCell page={page} perPage={pageLimit} onChange={onChangeLimit} />
    </>
  )
}

export default CarModelsPage
