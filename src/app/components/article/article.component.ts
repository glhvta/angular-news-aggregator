import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Input() isPreview: boolean;

  constructor() { }

  ngOnInit() {
  }

}
