import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  credentials: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).credentials()
  },
  roles: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).roles()
  },
  companyCreatedByUser: (_obj, { root }) => {
    return db.user
      .findUnique({ where: { id: root?.id } })
      .companyCreatedByUser()
  },
  companyUpdatedByUser: (_obj, { root }) => {
    return db.user
      .findUnique({ where: { id: root?.id } })
      .companyUpdatedByUser()
  },
  modelCreatedByuser: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).modelCreatedByuser()
  },
  modelUpdatedByuser: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).modelUpdatedByuser()
  },
  modelMakeCreatedByuser: (_obj, { root }) => {
    return db.user
      .findUnique({ where: { id: root?.id } })
      .modelMakeCreatedByuser()
  },
  modelMakeUpdatedByuser: (_obj, { root }) => {
    return db.user
      .findUnique({ where: { id: root?.id } })
      .modelMakeUpdatedByuser()
  },
  driverCreatedByuser: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).driverCreatedByuser()
  },
  driverUpdatedByuser: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).driverUpdatedByuser()
  },
  carCreatedByuser: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).carCreatedByuser()
  },
  carUpdatedByuser: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).carUpdatedByuser()
  },
  roleCreatedBy: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).roleCreatedBy()
  },
  roleUpdatedBy: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).roleUpdatedBy()
  },
  userRoleCreatedBy: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).userRoleCreatedBy()
  },
  userRoleUpdatedBy: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).userRoleUpdatedBy()
  },
  Company: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Company()
  },
  CarModel: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).CarModel()
  },
  CarModelMake: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).CarModelMake()
  },
  Car: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Car()
  },
}
