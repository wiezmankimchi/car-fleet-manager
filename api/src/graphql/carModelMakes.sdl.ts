export const schema = gql`
  type CarModelMake {
    id: Int!
    name: String!
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    carMakeId: Int!
    createdByUser: User
    updatedByUser: User
    make: CarModel!
    cars: [Car]!
    User: User
    userId: Int
  }

  type ModelMakeSet {
    makeModels: [CarModelMake]!
    count: Int!
  }

  type Query {
    allMakeModels(page: Int, limit: Int): ModelMakeSet @skipAuth
    carModelMakes: [CarModelMake!]! @skipAuth
    carModelMake(id: Int!): CarModelMake @requireAuth
  }

  input CreateCarModelMakeInput {
    name: String!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    carMakeId: Int!
    userId: Int
  }

  input UpdateCarModelMakeInput {
    name: String
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    carMakeId: Int
    userId: Int
  }

  type Mutation {
    createCarModelMake(input: CreateCarModelMakeInput!): CarModelMake!
      @requireAuth
    updateCarModelMake(
      id: Int!
      input: UpdateCarModelMakeInput!
    ): CarModelMake! @requireAuth
    deleteCarModelMake(id: Int!): CarModelMake! @requireAuth
  }
`
