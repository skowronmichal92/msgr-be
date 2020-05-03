const USER_QUERY = `
  user(id: ID!): User
`;

const USER_SCHEMA = `
  type User {
    id: ID!
    name: String!
    user: String!
    avatar: String 
  }
`;

export { USER_QUERY, USER_SCHEMA };
