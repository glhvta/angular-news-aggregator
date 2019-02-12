import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-articles-selector-form',
  templateUrl: './articles-selector-form.component.html',
  styleUrls: ['./articles-selector-form.component.scss'],
})
export class ArticlesSelectorFormComponent implements OnInit {
  // TODO: use builder
  settingForm = new FormGroup({
    source: new FormControl(),
    filterText: new FormControl(),
    areLocal: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

}
