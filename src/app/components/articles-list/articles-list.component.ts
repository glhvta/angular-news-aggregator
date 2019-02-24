import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  @Output() loadNewsEvent = new EventEmitter();
  @Output() deleteArticleEvent = new EventEmitter();
  @Input() articles: Array<Article>;
  @Input() filterString: string;

  constructor() { }

  ngOnInit() {
  }

  onLoadButtonClick(): void {
    this.loadNewsEvent.emit();
  }

  deleteArticle(id: string): void {
    this.deleteArticleEvent.emit(id);
  }
}
