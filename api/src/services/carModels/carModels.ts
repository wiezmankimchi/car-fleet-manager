import type {
  QueryResolvers,
  MutationResolvers,
  CarModelRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const carModels: QueryResolvers['carModels'] = () => {
  return db.carModel.findMany()
}

export const allModels = ({ page = 1, limit = 5, order = { name: 'asc' } }) => {
  const offset = (page - 1) * limit

  return {
    models: db.carModel.findMany({ take: limit, skip: offset, orderBy: order }),
    count: db.carModel.count(),
  }
}

export const carModel: QueryResolvers['carModel'] = ({ id }) => {
  return db.carModel.findUnique({
    where: { id },
  })
}

export const createCarModel: MutationResolvers['createCarModel'] = ({
  input,
}) => {
  return db.carModel.create({
    data: input,
  })
}

export const updateCarModel: MutationResolvers['updateCarModel'] = ({
  id,
  input,
}) => {
  return db.carModel.update({
    data: input,
    where: { id },
  })
}

export const deleteCarModel: MutationResolvers['deleteCarModel'] = ({ id }) => {
  return db.carModel.delete({
    where: { id },
  })
}

export const CarModel: CarModelRelationResolvers = {
  User: (_obj, { root }) => {
    return db.carModel.findUnique({ where: { id: root?.id } }).User()
  },
  createdByUser: (_obj, { root }) => {
    return db.carModel.findUnique({ where: { id: root?.id } }).createdByUser()
  },
  updatedByUser: (_obj, { root }) => {
    return db.carModel.findUnique({ where: { id: root?.id } }).updatedByUser()
  },
  models: (_obj, { root }) => {
    return db.carModel.findUnique({ where: { id: root?.id } }).models()
  },
}
