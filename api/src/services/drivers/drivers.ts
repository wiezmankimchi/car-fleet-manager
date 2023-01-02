import type {
  QueryResolvers,
  MutationResolvers,
  DriverRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const drivers: QueryResolvers['drivers'] = () => {
  return db.driver.findMany()
}

export const driver: QueryResolvers['driver'] = ({ id }) => {
  return db.driver.findUnique({
    where: { id },
  })
}

export const createDriver: MutationResolvers['createDriver'] = ({ input }) => {
  return db.driver.create({
    data: input,
  })
}

export const updateDriver: MutationResolvers['updateDriver'] = ({
  id,
  input,
}) => {
  return db.driver.update({
    data: input,
    where: { id },
  })
}

export const deleteDriver: MutationResolvers['deleteDriver'] = ({ id }) => {
  return db.driver.delete({
    where: { id },
  })
}

export const Driver: DriverRelationResolvers = {
  createdByUser: (_obj, { root }) => {
    return db.driver.findUnique({ where: { id: root?.id } }).createdByUser()
  },
  updatedByUser: (_obj, { root }) => {
    return db.driver.findUnique({ where: { id: root?.id } }).updatedByUser()
  },
  company: (_obj, { root }) => {
    return db.driver.findUnique({ where: { id: root?.id } }).company()
  },
  cars: (_obj, { root }) => {
    return db.driver.findUnique({ where: { id: root?.id } }).cars()
  },
}
