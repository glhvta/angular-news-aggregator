import { Component, OnInit } from '@angular/core';

import { Article } from 'src/app/core/models/article';
import { NewsReceiverService } from 'src/app/core/services/news-receiver.service';

import { LOCAL_NEWS, WEB_NEWS } from 'src/app/core/constants/newsProviders';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLocalProvider: boolean = false;
  sourceTitle: string = 'Source title';
  articles: Article[];
  filter: string = '';

  constructor(private newsReceiver: NewsReceiverService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews(): void {
    this.newsReceiver.getNews()
      .subscribe(articles => (this.articles = articles));
  }

  changeNewsProvider(isLocalProvider: boolean): void {
    const provider = isLocalProvider ? LOCAL_NEWS : WEB_NEWS;

    this.newsReceiver.changeProvider(provider);
  }
}
