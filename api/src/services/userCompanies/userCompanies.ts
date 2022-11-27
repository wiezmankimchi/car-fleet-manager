import type {
  QueryResolvers,
  MutationResolvers,
  UserCompanyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userCompanies: QueryResolvers['userCompanies'] = () => {
  return db.userCompany.findMany()
}

export const userCompany: QueryResolvers['userCompany'] = ({ id }) => {
  return db.userCompany.findUnique({
    where: { id },
  })
}

export const createUserCompany: MutationResolvers['createUserCompany'] = ({
  input,
}) => {
  return db.userCompany.create({
    data: input,
  })
}

export const updateUserCompany: MutationResolvers['updateUserCompany'] = ({
  id,
  input,
}) => {
  return db.userCompany.update({
    data: input,
    where: { id },
  })
}

export const deleteUserCompany: MutationResolvers['deleteUserCompany'] = ({
  id,
}) => {
  return db.userCompany.delete({
    where: { id },
  })
}

export const UserCompany: UserCompanyRelationResolvers = {
  company: (_obj, { root }) => {
    return db.userCompany.findUnique({ where: { id: root?.id } }).company()
  },
}
