export const schema = gql`
  type Company {
    id: Int!
    name: String!
    address1: String
    address2: String
    city: String!
    zipcode: String!
    country: String!
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    drivers: [Driver]!
    cars: [Car]!
    createdByUser: User
    updatedByUser: User
    User: User
    userId: Int
  }

  type Query {
    companies: [Company!]! @requireAuth
    company(id: Int!): Company @requireAuth
  }

  input CreateCompanyInput {
    name: String!
    address1: String
    address2: String
    city: String!
    zipcode: String!
    country: String!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    userId: Int
  }

  input UpdateCompanyInput {
    name: String
    address1: String
    address2: String
    city: String
    zipcode: String
    country: String
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    userId: Int
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: Int!, input: UpdateCompanyInput!): Company! @requireAuth
    deleteCompany(id: Int!): Company! @requireAuth
  }
`
