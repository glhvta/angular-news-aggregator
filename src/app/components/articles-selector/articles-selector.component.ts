import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articles-selector',
  templateUrl: './articles-selector.component.html',
  styleUrls: ['./articles-selector.component.scss'],
})
export class ArticlesSelectorComponent implements OnInit {
  @Input() isLocalProvider: boolean = false;
  @Output() source: string;
  @Output() filterText: string;
  @Output() localProviderStatus = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleProviderChange() {
    this.localProviderStatus.emit();
  }
}
