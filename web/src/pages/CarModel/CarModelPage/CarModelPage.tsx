import CarModelCell from 'src/components/CarModel/CarModelCell'

type CarModelPageProps = {
  id: number
}

const CarModelPage = ({ id }: CarModelPageProps) => {
  return <CarModelCell id={id} />
}

export default CarModelPage
