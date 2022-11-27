import CarModelMakeCell from 'src/components/CarModelMake/CarModelMakeCell'

type CarModelMakePageProps = {
  id: number
}

const CarModelMakePage = ({ id }: CarModelMakePageProps) => {
  return <CarModelMakeCell id={id} />
}

export default CarModelMakePage
