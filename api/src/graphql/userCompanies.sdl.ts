export const schema = gql`
  type UserCompany {
    id: Int!
    companyId: Int!
    createdAt: DateTime!
    updateAt: DateTime!
    createdBy: Int!
    updatedBy: Int!
    company: Company!
  }

  type Query {
    userCompanies: [UserCompany!]! @requireAuth
    userCompany(id: Int!): UserCompany @requireAuth
  }

  input CreateUserCompanyInput {
    companyId: Int!
    updateAt: DateTime!
    createdBy: Int!
    updatedBy: Int!
  }

  input UpdateUserCompanyInput {
    companyId: Int
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  type Mutation {
    createUserCompany(input: CreateUserCompanyInput!): UserCompany! @requireAuth
    updateUserCompany(id: Int!, input: UpdateUserCompanyInput!): UserCompany!
      @requireAuth
    deleteUserCompany(id: Int!): UserCompany! @requireAuth
  }
`
