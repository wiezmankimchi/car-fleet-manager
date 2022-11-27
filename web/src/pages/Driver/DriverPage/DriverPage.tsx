import DriverCell from 'src/components/Driver/DriverCell'

type DriverPageProps = {
  id: number
}

const DriverPage = ({ id }: DriverPageProps) => {
  return <DriverCell id={id} />
}

export default DriverPage
