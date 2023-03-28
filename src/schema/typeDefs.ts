export const typeDefs = `
  type Joke {
    id: ID!
    value: String!
    iconUrl: String
    url: String!
  }

  type Query {
    categories: [String!]!
    randomJokeByCategory(category: String!): Joke!
    randomJoke: Joke!
  }
`;
