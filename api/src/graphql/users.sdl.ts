export const schema = gql`
  type User {
    id: Int!
    email: String!
    firstName: String
    lastName: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    webAuthnChallenge: String
    roles: [UserRole]!
    companyCreatedByUser: [Company]!
    companyUpdatedByUser: [Company]!
    modelCreatedByuser: [CarModel]!
    modelUpdatedByuser: [CarModel]!
    modelMakeCreatedByuser: [CarModelMake]!
    modelMakeUpdatedByuser: [CarModelMake]!
    driverCreatedByuser: [Driver]!
    driverUpdatedByuser: [Driver]!
    carCreatedByuser: [Car]!
    carUpdatedByuser: [Car]!
    roleCreatedBy: [Role]!
    roleUpdatedBy: [Role]!
    userRoleCreatedBy: [UserRole]!
    userRoleUpdatedBy: [UserRole]!
    Company: [Company]!
    CarModel: [CarModel]!
    CarModelMake: [CarModelMake]!
    Car: [Car]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    firstName: String
    lastName: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    webAuthnChallenge: String
  }

  input UpdateUserInput {
    email: String
    firstName: String
    lastName: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    webAuthnChallenge: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
