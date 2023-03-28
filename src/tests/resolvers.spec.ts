import { resolvers } from '../schema/resolvers';
import {
  getRandomJokeByCategoryMock,
  mockCategories,
  mockDataSources,
  mockRandomJoke,
} from './setup';

describe('Resolvers', function () {
  describe('Query', function () {
    describe('Random joke', function () {
      it('should return a random joke', async function () {
        const response = await resolvers.Query.randomJoke(
          {},
          {},
          {
            dataSources: mockDataSources,
          }
        );
        expect(response).toHaveProperty('value', mockRandomJoke.value);
        expect(response).toHaveProperty('id', mockRandomJoke.id);
      });

      it('should return a random joke by category', async function () {
        const response = await resolvers.Query.randomJokeByCategory(
          {},
          { category: mockCategories[0] },
          {
            dataSources: mockDataSources,
          }
        );

        expect(getRandomJokeByCategoryMock).toHaveBeenCalledWith(
          mockCategories[0]
        );
        expect(response).toHaveProperty('value', mockRandomJoke.value);
        expect(response).toHaveProperty('id', mockRandomJoke.id);
      });
    });

    describe('Categories', function () {
      it('should return all categories', async function () {
        const response = await resolvers.Query.categories(
          {},
          {},
          {
            dataSources: mockDataSources,
          }
        );

        expect(response).toEqual(mockCategories);
      });
    });
  });
});
