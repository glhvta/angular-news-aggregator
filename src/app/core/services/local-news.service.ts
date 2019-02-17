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
  private articles: Article[] = [];

  private requestEndpoint = 'http://localhost:3000/local-news';

  constructor(private http: HttpClient) {}

  public getNews(): Observable<Article[]> {
    return this.http.get(this.requestEndpoint).pipe(
      tap(this.updateArticles),
      map(() => this.localArticles),
      // map(() => this.webArticles),
      // catchError(console.warn),
    );
  }

  public getArticle(id: string): Observable<Article> {
    const article = this.articles.find(({ _id }) => _id === id);

    return of(article);
  }

  public createArticle(article: Article): Observable<Article> {

    return this.http
      .post<Article>(this.requestEndpoint, { article })
      .pipe(tap(() => console.log('post request was done')));
  }

  // TODO: create base service with common methods
  private updateArticles = (articles: Article[]): void => {
    this.articles = [
      ...this.articles,
      ...articles.map(data => ({ ...data, provider: this.type })),
    ];
  }

  private get localArticles(): Article[] {
    return this.articles;
  }
}
