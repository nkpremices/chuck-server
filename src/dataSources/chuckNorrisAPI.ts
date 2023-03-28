import { RESTDataSource } from '@apollo/datasource-rest';

export class ChuckNorrisAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes/';
  }

  async getCategories() {
    return this.get('categories');
  }

  async getRandomJokeByCategory(category: string) {
    return this.get(`random?category=${category}`);
  }

  async getRandomJoke() {
    return this.get('random');
  }
}
