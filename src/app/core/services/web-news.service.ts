import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class WebNewsService {
  private page: number = 1;

  private requestConfig = {
    endPoint: 'https://newsapi.org/v2/top-headlines',
    API_KEY: 'fff0c9c8799f4640888f3bf1c197fedc',
  };

  constructor(private http: HttpClient) {}

  public getNews(): Observable<Article[]> {
    // TODO: integrate error handling
    return this.http.get(this.requestUrl).pipe(
      pluck('articles'),
      // catchError(console.warn),
    );
  }

  private get requestUrl(): string {
    const { API_KEY, endPoint } = this.requestConfig;

    // TODO: refactor hardcoded query
    return `${endPoint}?apiKey=${API_KEY}&language=en&pageSize=5&page=${
      this.page++}`;
  }
}
