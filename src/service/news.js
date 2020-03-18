import {articlesBaseUrl, countryCode, apiKey} from '../config/apiConfig'

export async function getArticlesFromApi(category='general') {
    try {
      let articlesData = await fetch(
        `${articlesBaseUrl}?country=${countryCode}&category=${category}&apiKey=${apiKey}`,
      );
      let responseJson = await articlesData.json();
      return responseJson.articles;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }