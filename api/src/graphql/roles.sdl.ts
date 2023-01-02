export const schema = gql`
  type Role {
    id: Int!
    name: String!
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    createdByUser: User
    updatedByUser: User
    users: [UserRole]!
  }

  type Query {
    roles: [Role!]! @requireAuth
    role(id: Int!): Role @requireAuth
  }

  input CreateRoleInput {
    name: String!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  input UpdateRoleInput {
    name: String
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  type Mutation {
    createRole(input: CreateRoleInput!): Role! @requireAuth
    updateRole(id: Int!, input: UpdateRoleInput!): Role! @requireAuth
    deleteRole(id: Int!): Role! @requireAuth
  }
`
