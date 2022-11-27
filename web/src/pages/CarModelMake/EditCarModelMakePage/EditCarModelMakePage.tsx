import EditCarModelMakeCell from 'src/components/CarModelMake/EditCarModelMakeCell'

type CarModelMakePageProps = {
  id: number
}

const EditCarModelMakePage = ({ id }: CarModelMakePageProps) => {
  return <EditCarModelMakeCell id={id} />
}

export default EditCarModelMakePage
