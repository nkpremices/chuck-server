import { ChuckNorrisAPI } from '../dataSources/chuckNorrisAPI';
import { Joke } from '../@types/joke';

export interface DataSources {
  chuckNorrisAPI: ChuckNorrisAPI;
}

export const resolvers = {
  Query: {
    categories: async (
      _: Record<any, any>,
      __: Record<any, any>,
      { dataSources }: { dataSources: DataSources }
    ) => {
      const categories = await dataSources.chuckNorrisAPI.getCategories();
      return categories;
    },
    randomJoke: async (
      _: Record<any, any>,
      { category }: { category: string },
      { dataSources }: { dataSources: DataSources }
    ) => {
      const joke = await dataSources.chuckNorrisAPI.getRandomJoke(category);

      return {
        id: joke.id,
        value: joke.value,
        iconUrl: joke.icon_url,
        url: joke.url,
      } as Joke;
    },
  },
};
