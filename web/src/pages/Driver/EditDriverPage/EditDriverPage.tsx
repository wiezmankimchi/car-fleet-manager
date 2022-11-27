import EditDriverCell from 'src/components/Driver/EditDriverCell'

type DriverPageProps = {
  id: number
}

const EditDriverPage = ({ id }: DriverPageProps) => {
  return <EditDriverCell id={id} />
}

export default EditDriverPage
