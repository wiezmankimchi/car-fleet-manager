import { useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import CarModelMakesCell from 'src/components/CarModelMake/CarModelMakesCell'

type AllModesProps = {
  page: number
  limit: number
}

const CarModelMakesPage = ({ page, limit }: AllModesProps) => {
  const [pageLimit, setPageLimit] = useState(limit)

  const onChangeLimit = (newLimit) => {
    setPageLimit(newLimit)
    navigate(routes.carModelMakesPage({ page: 1, limit: newLimit }))
  }

  return (
    <CarModelMakesCell
      page={page}
      perPage={pageLimit}
      onChange={onChangeLimit}
      allModels={undefined}
    />
  )
}

export default CarModelMakesPage
