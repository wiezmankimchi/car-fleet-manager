import CarCell from 'src/components/Car/CarCell'

type CarPageProps = {
  id: number
}

const CarPage = ({ id }: CarPageProps) => {
  return <CarCell id={id} />
}

export default CarPage
