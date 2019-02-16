import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  @Output() loadNewsEvent = new EventEmitter();
  @Input() articles: Array<Article>;

  constructor() { }

  ngOnInit() {
  }

  onLoadButtonClick() {
    this.loadNewsEvent.emit();
  }
}
