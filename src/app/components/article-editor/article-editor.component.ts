import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    image: new FormControl(),
    imageType: new FormControl(),
    date: new FormControl(),
    author: new FormControl(),
    sourceUrl: new FormControl(),
  });

  imageType: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.articleForm.value);
  }
}
