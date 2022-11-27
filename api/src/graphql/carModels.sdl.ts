export const schema = gql`
  type CarModel {
    id: Int!
    name: String!
    createdAt: DateTime!
    updateAt: DateTime!
    createdBy: Int!
    updatedBy: Int!
    models: [CarModelMake]!
  }

  type Query {
    carModels: [CarModel!]! @requireAuth
    carModel(id: Int!): CarModel @requireAuth
  }

  input CreateCarModelInput {
    name: String!
    updateAt: DateTime!
    createdBy: Int!
    updatedBy: Int!
  }

  input UpdateCarModelInput {
    name: String
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  type Mutation {
    createCarModel(input: CreateCarModelInput!): CarModel! @requireAuth
    updateCarModel(id: Int!, input: UpdateCarModelInput!): CarModel!
      @requireAuth
    deleteCarModel(id: Int!): CarModel! @requireAuth
  }
`
