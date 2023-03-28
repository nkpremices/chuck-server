import { Joke } from '../../@types/joke';
import { faker } from '@faker-js/faker';
import { ChuckNorrisAPI } from '../../dataSources/chuckNorrisAPI';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from '../../schema/typeDefs';
import { resolvers } from '../../schema/resolvers';

export const mockRandomJoke: Joke = {
  id: faker.random.numeric(10).toString(),
  url: faker.internet.url(),
  value: faker.random.words(20),
  iconUrl: faker.internet.url(),
};

export const mockCategories = faker.random.words(10).split(' ');

export const getRandomJokeByCategoryMock = jest.fn(
  (category: string) => mockRandomJoke
);

export const mockDataSources = {
  chuckNorrisAPI: {
    getRandomJokeByCategory: getRandomJokeByCategoryMock,
    getRandomJoke: jest.fn(() => mockRandomJoke),
    getCategories: jest.fn(() => mockCategories),
  },
} as any;

export const mockChuckNorrisApi = new ChuckNorrisAPI();

export const mockServer = new ApolloServer({
  typeDefs,
  resolvers,
});
