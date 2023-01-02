export const schema = gql`
  type CarModel {
    id: Int!
    name: String!
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    User: User
    createdByUser: User
    updatedByUser: User
    models: [CarModelMake]!
    userId: Int
  }

  type ModelSet {
    models: [CarModel]!
    count: Int!
  }
  type Query {
    allModels(page: Int, limit: Int): ModelSet @skipAuth
    carModels: [CarModel!]! @requireAuth
    carModel(id: Int!): CarModel @requireAuth
  }

  input CreateCarModelInput {
    name: String!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    userId: Int
  }

  input UpdateCarModelInput {
    name: String
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    userId: Int
  }

  type Mutation {
    createCarModel(input: CreateCarModelInput!): CarModel! @requireAuth
    updateCarModel(id: Int!, input: UpdateCarModelInput!): CarModel!
      @requireAuth
    deleteCarModel(id: Int!): CarModel! @requireAuth
  }
`
