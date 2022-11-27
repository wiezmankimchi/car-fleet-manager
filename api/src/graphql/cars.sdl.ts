export const schema = gql`
  type Car {
    id: Int!
    registrtion: String!
    regDate: DateTime!
    makeId: Int!
    driverId: Int!
    companyId: Int!
    createdAt: DateTime!
    updateAt: DateTime!
    createdBy: Int!
    updatedBy: Int!
    carmake: CarModelMake!
    driver: Driver!
    company: Company!
  }

  type Query {
    cars: [Car!]! @requireAuth
    car(id: Int!): Car @requireAuth
  }

  input CreateCarInput {
    registrtion: String!
    regDate: DateTime!
    makeId: Int!
    driverId: Int!
    companyId: Int!
    updateAt: DateTime!
    createdBy: Int!
    updatedBy: Int!
  }

  input UpdateCarInput {
    registrtion: String
    regDate: DateTime
    makeId: Int
    driverId: Int
    companyId: Int
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  type Mutation {
    createCar(input: CreateCarInput!): Car! @requireAuth
    updateCar(id: Int!, input: UpdateCarInput!): Car! @requireAuth
    deleteCar(id: Int!): Car! @requireAuth
  }
`
