import type {
  QueryResolvers,
  MutationResolvers,
  CarModelMakeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const carModelMakes: QueryResolvers['carModelMakes'] = () => {
  return db.carModelMake.findMany()
}

export const carModelMake: QueryResolvers['carModelMake'] = ({ id }) => {
  return db.carModelMake.findUnique({
    where: { id },
  })
}

export const createCarModelMake: MutationResolvers['createCarModelMake'] = ({
  input,
}) => {
  return db.carModelMake.create({
    data: input,
  })
}

export const updateCarModelMake: MutationResolvers['updateCarModelMake'] = ({
  id,
  input,
}) => {
  return db.carModelMake.update({
    data: input,
    where: { id },
  })
}

export const deleteCarModelMake: MutationResolvers['deleteCarModelMake'] = ({
  id,
}) => {
  return db.carModelMake.delete({
    where: { id },
  })
}

export const CarModelMake: CarModelMakeRelationResolvers = {
  createdByUser: (_obj, { root }) => {
    return db.carModelMake
      .findUnique({ where: { id: root?.id } })
      .createdByUser()
  },
  updatedByUser: (_obj, { root }) => {
    return db.carModelMake
      .findUnique({ where: { id: root?.id } })
      .updatedByUser()
  },
  make: (_obj, { root }) => {
    return db.carModelMake.findUnique({ where: { id: root?.id } }).make()
  },
  cars: (_obj, { root }) => {
    return db.carModelMake.findUnique({ where: { id: root?.id } }).cars()
  },
  User: (_obj, { root }) => {
    return db.carModelMake.findUnique({ where: { id: root?.id } }).User()
  },
}
