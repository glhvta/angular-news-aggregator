import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss'],
})
export class ArticleEditorComponent implements OnInit {
  articleForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    content: new FormControl(),
    urlToImage: new FormControl(),
    imageType: new FormControl(),
    publishedAt: new FormControl(),
    author: new FormControl(),
    url: new FormControl(),
  });

  @Output() submitEvent = new EventEmitter<Article>();

  imageType: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.submitEvent.emit(this.articleForm.value);
    this.articleForm.reset();
  }
}
