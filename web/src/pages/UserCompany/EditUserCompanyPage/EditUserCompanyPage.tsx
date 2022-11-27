import EditUserCompanyCell from 'src/components/UserCompany/EditUserCompanyCell'

type UserCompanyPageProps = {
  id: number
}

const EditUserCompanyPage = ({ id }: UserCompanyPageProps) => {
  return <EditUserCompanyCell id={id} />
}

export default EditUserCompanyPage
