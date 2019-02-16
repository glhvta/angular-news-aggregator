import { Article } from './article';

interface NewsProvider {
  getNews(): Array<Article>;
}

export default NewsProvider;
