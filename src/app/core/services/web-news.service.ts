import { Observable, of } from 'rxjs';
import { pluck, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from '../models/article';

import { WEB_NEWS } from 'src/app/core/constants/newsProviders';
import NewsProvider from '../models/news-provider';

@Injectable({
  providedIn: 'root',
})
export class WebNewsService implements NewsProvider {
  private type = WEB_NEWS;
  private page: number = 1;
  private articles: Article[] = [];

  private requestConfig = {
    endPoint: 'https://newsapi.org/v2/top-headlines',
    API_KEY: 'fff0c9c8799f4640888f3bf1c197fedc',
  };

  constructor(private http: HttpClient) {}

  public getNews(): Observable<Article[]> {
    // TODO: integrate error handling

    return this.http.get(this.requestUrl).pipe(
      pluck('articles'),
      tap(this.updateArticles),
      map(() => this.webArticles),
      // catchError(console.warn),
    );
  }

  public getArticle(id: string): Observable<Article> {
    const article = this.articles.find(({ _id }) => _id === id);

    return of(article);
  }

  public getSavedNews(): Observable<Article[]> {
    return of(this.articles);
  }

  private updateArticles = (articles: Article[]): void => {
    this.articles = this.articles.concat(this.transformResponse(articles));
  }

  private get webArticles(): Article[] {
    return this.articles;
  }

  private get requestUrl(): string {
    const { API_KEY, endPoint } = this.requestConfig;

    // TODO: refactor hardcoded query
    return `${endPoint}?apiKey=${API_KEY}&language=en&pageSize=5&page=${this
      .page++}`;
  }

  private transformResponse(articles: Article[]): Article[] {
    const length = this.articles.length;

    return articles.map((data, i) => ({
      ...data,
      provider: this.type,
      _id: String(length + i),
    }));
  }
}
