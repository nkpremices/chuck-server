import { faker } from '@faker-js/faker';

import {
  GET_ALL_CATEGORIES,
  GET_RANDOM_JOKE,
  GET_RANDOM_JOKE_BY_CATEGORY,
} from './setup/queries';
import {
  mockCategories,
  mockChuckNorrisApi,
  mockRandomJoke,
  mockServer,
} from './setup';

describe('API', function () {
  describe('Query', function () {
    describe('Joke', function () {
      it('should get a random joke', async function () {
        const getRandomJokeSpy = jest
          .spyOn(mockChuckNorrisApi, 'getRandomJoke')
          .mockResolvedValue({
            ...mockRandomJoke,
            icon_url: mockRandomJoke.iconUrl,
          });

        const res = await mockServer.executeOperation(
          {
            query: GET_RANDOM_JOKE,
          },
          {
            contextValue: {
              dataSources: {
                chuckNorrisAPI: mockChuckNorrisApi,
              },
            },
          }
        );

        const joke = (res?.body as any)?.singleResult?.data?.randomJoke;

        expect(getRandomJokeSpy).toHaveBeenCalledTimes(1);
        expect(joke).toBeDefined();
        expect(joke).toHaveProperty('id', mockRandomJoke.id);
        expect(joke).toHaveProperty('value', mockRandomJoke.value);
        expect(joke).toHaveProperty('iconUrl', mockRandomJoke.iconUrl);
        expect(joke).toHaveProperty('url', mockRandomJoke.url);
      });
      it('should get a random joke by category', async function () {
        const category = faker.random.word();

        const getRandomJokeByCategorySpy = jest
          .spyOn(mockChuckNorrisApi, 'getRandomJokeByCategory')
          .mockResolvedValue({
            ...mockRandomJoke,
            icon_url: mockRandomJoke.iconUrl,
          });

        const res = await mockServer.executeOperation(
          {
            query: GET_RANDOM_JOKE_BY_CATEGORY,
            variables: { category },
          },
          {
            contextValue: {
              dataSources: {
                chuckNorrisAPI: mockChuckNorrisApi,
              },
            },
          }
        );

        const joke = (res?.body as any)?.singleResult?.data
          ?.randomJokeByCategory;

        expect(getRandomJokeByCategorySpy).toHaveBeenCalledWith(category);
        expect(joke).toBeDefined();
        expect(joke).toHaveProperty('id', mockRandomJoke.id);
        expect(joke).toHaveProperty('value', mockRandomJoke.value);
        expect(joke).toHaveProperty('iconUrl', mockRandomJoke.iconUrl);
        expect(joke).toHaveProperty('url', mockRandomJoke.url);
      });
    });

    describe('Categories', function () {
      it('should get all categories', async function () {
        const getCategories = jest
          .spyOn(mockChuckNorrisApi, 'getCategories')
          .mockResolvedValue(mockCategories);

        const res = await mockServer.executeOperation(
          {
            query: GET_ALL_CATEGORIES,
          },
          {
            contextValue: {
              dataSources: {
                chuckNorrisAPI: mockChuckNorrisApi,
              },
            },
          }
        );

        const categories = (res?.body as any)?.singleResult?.data?.categories;

        expect(getCategories).toHaveBeenCalledTimes(1);
        expect(categories).toBeInstanceOf(Array);
      });
    });
  });
});
