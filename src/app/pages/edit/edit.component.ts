import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article';
import { LocalNewsService } from 'src/app/core/services/local-news.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  constructor(private localNewsService: LocalNewsService) { }

  ngOnInit() {
  }

  createArticle(article: Article): void {
    this.localNewsService.createArticle(article)
      .subscribe(() => console.log('new article was created'));
  }
}
