import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WEB_NEWS } from 'src/app/core/constants/newsProviders';
import NewsProvider from '../models/news-provider';

import { NewsProviderFacoryService } from './news-provider-facory.service';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class NewsReceiverService {
  private provider: NewsProvider;

  constructor(private providerFactorty: NewsProviderFacoryService) {
    this.provider = this.providerFactorty.get(WEB_NEWS);
   }

  public changeProvider(providerType: string): void {
    this.provider = this.providerFactorty.get(providerType);
  }

  public getNews(): Observable<Article[]> {
    return this.provider.getNews();
  }
}
