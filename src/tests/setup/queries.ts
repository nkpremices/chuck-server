export const GET_RANDOM_JOKE = `
  query {
    randomJoke {
      id
      value
      iconUrl
      url
    }
  }
`;

export const GET_RANDOM_JOKE_BY_CATEGORY = `
  query randomJokeByCategory($category: String!) {
    randomJokeByCategory(category: $category) {
      id
      value
      iconUrl
      url
    }
  }
`;

export const GET_ALL_CATEGORIES = `
  query {
    categories 
  }
`;
