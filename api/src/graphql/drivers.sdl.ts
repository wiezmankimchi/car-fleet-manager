export const schema = gql`
  type Driver {
    id: Int!
    name: String!
    email: String!
    phone: String!
    dob: DateTime!
    companyId: Int!
    createdAt: DateTime!
    updateAt: DateTime!
    createdBy: Int!
    updatedBy: Int!
    company: Company!
    cars: [Car]!
  }

  type Query {
    drivers: [Driver!]! @requireAuth
    driver(id: Int!): Driver @requireAuth
  }

  input CreateDriverInput {
    name: String!
    email: String!
    phone: String!
    dob: DateTime!
    companyId: Int!
    updateAt: DateTime!
    createdBy: Int!
    updatedBy: Int!
  }

  input UpdateDriverInput {
    name: String
    email: String
    phone: String
    dob: DateTime
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
