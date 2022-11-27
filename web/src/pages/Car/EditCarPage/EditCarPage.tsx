import EditCarCell from 'src/components/Car/EditCarCell'

type CarPageProps = {
  id: number
}

const EditCarPage = ({ id }: CarPageProps) => {
  return <EditCarCell id={id} />
}

export default EditCarPage
