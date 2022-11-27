export const schema = gql`
  type CarModelMake {
    id: Int!
    name: String!
    createdAt: DateTime!
    updateAt: DateTime!
    createdBy: Int!
    updatedBy: Int!
    carMakeId: Int!
    make: CarModel!
    cars: [Car]!
  }

  type Query {
    carModelMakes: [CarModelMake!]! @requireAuth
    carModelMake(id: Int!): CarModelMake @requireAuth
  }

  input CreateCarModelMakeInput {
    name: String!
    updateAt: DateTime!
    createdBy: Int!
    updatedBy: Int!
    carMakeId: Int!
  }

  input UpdateCarModelMakeInput {
    name: String
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    carMakeId: Int
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
