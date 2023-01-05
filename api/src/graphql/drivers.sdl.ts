export const schema = gql`
  type Driver {
    id: Int!
    name: String!
    email: String!
    phone: String!
    dob: DateTime!
    registrationNumber: String!
    registrationEndDate: DateTime!
    registrationImageURL: String!
    companyId: Int!
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    createdByUser: User
    updatedByUser: User
    company: Company
    cars: [Car]!
  }

  type DriverSet {
    drivers: [Driver]!
    count: Int!
  }

  type Query {
    allDrivers(page: Int, limit: Int): DriverSet @skipAuth
    drivers: [Driver!]! @skipAuth
    driver(id: Int!): Driver @requireAuth
  }

  input CreateDriverInput {
    name: String!
    email: String!
    phone: String!
    dob: DateTime!
    registrationNumber: String!
    registrationEndDate: DateTime!
    registrationImageURL: String!
    companyId: Int!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  input UpdateDriverInput {
    name: String
    email: String
    phone: String
    dob: DateTime
    registrationNumber: String
    registrationEndDate: DateTime
    registrationImageURL: String
    companyId: Int
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  type Mutation {
    createDriver(input: CreateDriverInput!): Driver! @requireAuth
    updateDriver(id: Int!, input: UpdateDriverInput!): Driver! @requireAuth
    deleteDriver(id: Int!): Driver! @requireAuth
  }
`
