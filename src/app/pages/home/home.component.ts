import { Component, OnInit } from '@angular/core';

import { Article } from 'src/app/core/models/article';
import { NewsReceiverService } from 'src/app/core/services/news-receiver.service';

import { LOCAL_NEWS, WEB_NEWS } from 'src/app/core/constants/newsProviders';
import { LocalNewsService } from 'src/app/core/services/local-news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLocalProvider: boolean = true;
  sourceTitle: string = 'Source title';
  articles: Article[];
  filter: string = '';

  constructor(
    private newsReceiver: NewsReceiverService,
    private localNewsService: LocalNewsService,
  ) {}

  ngOnInit() {
    this.changeNewsProvider(this.isLocalProvider);
    this.loadNews();
  }

  loadNews(): void {
    this.newsReceiver
      .getNews()
      .subscribe(articles => (this.articles = articles));
  }

  changeNewsProvider(isLocalProvider: boolean): void {
    const provider = isLocalProvider ? LOCAL_NEWS : WEB_NEWS;

    this.newsReceiver.changeProvider(provider);
  }

  deleteArticle(id: string): void {
    // Is it right to filter articles here?

    this.localNewsService.deleteArticle(id).subscribe(() => {
      this.articles = this.articles.filter(({ _id }) => _id !== id);
    });
  }
}
