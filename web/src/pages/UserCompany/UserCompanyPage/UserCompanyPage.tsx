import UserCompanyCell from 'src/components/UserCompany/UserCompanyCell'

type UserCompanyPageProps = {
  id: number
}

const UserCompanyPage = ({ id }: UserCompanyPageProps) => {
  return <UserCompanyCell id={id} />
}

export default UserCompanyPage
