import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article';
import { LocalNewsService } from 'src/app/core/services/local-news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  article: Article;

  constructor( private route: ActivatedRoute, private localNewsService: LocalNewsService) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const { paramMap } = this.route.snapshot;

    this.localNewsService
      .getArticle(paramMap.get('id'))
      .subscribe(article => (this.article = article));
  }

  updateArticle(article: Article): void {
    this.localNewsService
      .updateArticle(article)
      .subscribe();
  }
}
