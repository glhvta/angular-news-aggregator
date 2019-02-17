import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articles-selector',
  templateUrl: './articles-selector.component.html',
  styleUrls: ['./articles-selector.component.scss'],
})
export class ArticlesSelectorComponent implements OnInit {
  @Input() isLocalProvider: boolean = false;
  @Output() source: string;
  @Input() filterString: string;
  @Output() filterStringChange = new EventEmitter<string>();
  @Output() localProviderStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  handleProviderChange(event): void {
    this.localProviderStatus.emit(event);
  }

  onFilterTextChange(filter: string): void {
    this.filterStringChange.emit(filter);
  }
}
