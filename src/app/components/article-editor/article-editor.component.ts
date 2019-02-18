import {
  Component,
  OnInit,
  OnChanges,
  EventEmitter,
  Output,
  Input,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss'],
})
export class ArticleEditorComponent implements OnInit, OnChanges {
  @Input() article: Article;
  @Output() submitEvent = new EventEmitter<Article>();

  imageType: string;
  articleForm = this.fb.group({
    _id: [''],
    title: [''],
    description: [''],
    content: [''],
    urlToImage: [''],
    publishedAt: [''],
    author: [''],
    url: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const article = changes.article.currentValue;

    if (!article) {
      return;
    }

    // TODO: mb there is better approach for this
    this.articleForm.setValue({
      _id: article._id || '',
      title: article.title || '',
      description: article.description || '',
      content: article.content || '',
      urlToImage: article.urlToImage || '',
      publishedAt: article.publishedAt || '',
      author: article.author || '',
      url: article.url || '',
    });
  }

  onSubmit(): void {
    this.submitEvent.emit(this.articleForm.value);

    // Better than any modal :))
    alert('Article data was changed');
  }
}
