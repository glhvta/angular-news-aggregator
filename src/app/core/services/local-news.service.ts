import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from '../models/article';
import NewsProvider from '../models/news-provider';
import { LOCAL_NEWS } from '../constants/newsProviders';

@Injectable({
  providedIn: 'root',
})
export class LocalNewsService implements NewsProvider {
  private type = LOCAL_NEWS;
  private requestEndpoint = 'http://localhost:3000/local-news';

  constructor(private http: HttpClient) {

  }

  public getNews(): Observable<Article[]> {
    return this.http.get(this.requestEndpoint).pipe(
      map(this.addProviderType),
      // catchError(console.warn),
    );
  }

  public getSavedNews(): Observable<Article[]> {
    return this.getNews();
  }

  public getArticle(id: string): Observable<Article> {
    return this.http
      .get<Article>(`${this.requestEndpoint}/${id}`)
      .pipe(tap(data => console.log('Local article: ', data)));
  }

  public createArticle(article: Article): Observable<Article> {
    return this.http
      .post<Article>(this.requestEndpoint, { article })
      .pipe(tap(() => console.log('Post request was done')));
  }

  public updateArticle(article: Article): Observable<any> {
    return this.http
      .put<Article>(`${this.requestEndpoint}/${article._id}`, { article })
      .pipe(tap(() => console.log('Put request was done')));
  }

  public deleteArticle(id: string): Observable<any> {
    return this.http
      .delete(`${this.requestEndpoint}/${id}`)
      .pipe(tap(() => console.log('Delete request was done')));
  }

  private addProviderType = (articles: Article[]): Article[] => {
    return articles.map(data => ({ ...data, provider: this.type }));
  }
}
