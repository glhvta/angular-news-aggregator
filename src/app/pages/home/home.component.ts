import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article';
import { articlesMock } from 'src/app/core/mocks/articles.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLocalProvider: boolean = true;
  sourceTitle: string = 'Source title';
  articles: Article[] = articlesMock;

  constructor() { }

  ngOnInit() {
  }

  loadNews() {
    console.log('Load news!');
  }

  toggleLocalNewsStatus(): void {
    this.isLocalProvider = !this.isLocalProvider;
  }

}
