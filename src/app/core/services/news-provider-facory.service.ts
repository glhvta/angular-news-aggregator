import { Injectable } from '@angular/core';
import { LocalNewsService } from './local-news.service';
import { WebNewsService } from './web-news.service';
import NewsProvider from '../models/news-provider';

import { LOCAL_NEWS, WEB_NEWS } from 'src/app/core/constants/newsProviders';

@Injectable({
  providedIn: 'root',
})
export class NewsProviderFacoryService {
  constructor(
    private localNews: LocalNewsService,
    private webNews: WebNewsService,
  ) {}

  public get(providerType: string): NewsProvider {
    switch (providerType) {
      case LOCAL_NEWS: return this.localNews;
      case WEB_NEWS: return this.webNews;
    }
  }
}
