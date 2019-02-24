import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article';
import { LocalNewsService } from 'src/app/core/services/local-news.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {

  constructor(private localNewsService: LocalNewsService) { }

  ngOnInit() {
  }

  createArticle(article: Article): void {
    this.localNewsService.createArticle(article)
      .subscribe(() => console.log('new article was created'));
  }
}
