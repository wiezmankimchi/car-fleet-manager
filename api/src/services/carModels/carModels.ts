import type {
  QueryResolvers,
  MutationResolvers,
  CarModelRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const carModels: QueryResolvers['carModels'] = () => {
  return db.carModel.findMany()
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
  models: (_obj, { root }) => {
    return db.carModel.findUnique({ where: { id: root?.id } }).models()
  },
}
