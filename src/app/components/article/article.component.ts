import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/core/models/article';
import { LOCAL_NEWS } from 'src/app/core/constants/newsProviders';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Input() isPreview: boolean;
  @Input() highlightStr: string;

  @Output() deleteArticleEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  private isLocalProvider(provider: string): boolean {
    return provider === LOCAL_NEWS;
  }

  private handleArticleDelete(id: string): void {
    this.deleteArticleEvent.emit(id);
  }

}
