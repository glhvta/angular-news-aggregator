import { Component, OnInit } from '@angular/core';
import { articleMock } from 'src/app/core/mocks/article.mock';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent implements OnInit {
  article: Article = articleMock;
  constructor() { }

  ngOnInit() {
  }

}
