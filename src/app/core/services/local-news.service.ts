import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  constructor(private http: HttpClient) { }

  public getNews(): Observable<Article[]> {
    return this.http.get(this.requestEndpoint).pipe(
      tap(console.log),
      // map(() => this.webArticles),
      // catchError(console.warn),
    );
  }

  public getArticle(): Observable<Article> {
    console.log('local article');
  }
}
