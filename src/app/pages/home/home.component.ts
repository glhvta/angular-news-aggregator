import { Component, OnInit } from '@angular/core';

import { Article } from 'src/app/core/models/article';
import { NewsReceiverService } from 'src/app/core/services/news-receiver.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLocalProvider: boolean = true;
  sourceTitle: string = 'Source title';
  articles: Article[];

  constructor(private newsReceiver: NewsReceiverService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews(): void {
    this.newsReceiver.getNews()
      .subscribe(articles => (this.articles = articles));
  }

  toggleLocalNewsStatus(): void {
    this.isLocalProvider = !this.isLocalProvider;
  }
}
