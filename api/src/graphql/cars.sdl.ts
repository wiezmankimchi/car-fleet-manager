export const schema = gql`
  type Car {
    id: Int!
    registrtion: String!
    regDate: DateTime!
    makeId: Int!
    driverId: Int!
    companyId: Int!
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    createdByUser: User
    updatedByUser: User
    carmake: CarModelMake!
    driver: Driver!
    company: Company
    User: User
    userId: Int
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
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    userId: Int
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
    userId: Int
  }

  type Mutation {
    createCar(input: CreateCarInput!): Car! @requireAuth
    updateCar(id: Int!, input: UpdateCarInput!): Car! @requireAuth
    deleteCar(id: Int!): Car! @requireAuth
  }
`
