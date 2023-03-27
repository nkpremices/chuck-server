import { typeDefs } from './schema/typeDefs';
import { resolvers } from './schema/resolvers';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ChuckNorrisAPI } from './dataSources/chuckNorrisAPI';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server as unknown as ApolloServer, {
  listen: { port: 4000, path: 'graphql' },
  context: async () => {
    return {
      dataSources: {
        chuckNorrisAPI: new ChuckNorrisAPI(),
      },
    };
  },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
