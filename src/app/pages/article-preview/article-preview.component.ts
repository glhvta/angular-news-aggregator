import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from 'src/app/core/models/article';
import { NewsReceiverService } from 'src/app/core/services/news-receiver.service';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private newsReceiver: NewsReceiverService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const { paramMap } = this.route.snapshot;
    const id = Number(paramMap.get('id'));

    this.newsReceiver
      .changeProvider(paramMap.get('provider'))
      .getArticle(id)
      .subscribe(article => (this.article = article));
  }

  back(): void {
    // TODO: create back button
    this.location.back();
  }
}
