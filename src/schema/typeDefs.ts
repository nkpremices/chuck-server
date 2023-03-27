export const typeDefs = `
  type Joke {
    id: ID!
    value: String!
    iconUrl: String!
    url: String!
  }

  type Query {
    categories: [String!]!
    randomJoke(category: String!): Joke!
  }
`;
