import { Observable } from 'rxjs';
import { Article } from './article';

interface NewsProvider {
  getNews(): Observable<Article[]>;
  getArticle(id: string): Observable<Article>;
}

export default NewsProvider;
