import EditCarModelCell from 'src/components/CarModel/EditCarModelCell'

type CarModelPageProps = {
  id: number
}

const EditCarModelPage = ({ id }: CarModelPageProps) => {
  return <EditCarModelCell id={id} />
}

export default EditCarModelPage
