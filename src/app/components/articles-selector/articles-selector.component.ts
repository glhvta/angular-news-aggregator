import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsReceiverService } from 'src/app/core/services/news-receiver.service';

import { LOCAL_NEWS, WEB_NEWS } from 'src/app/core/constants/newsProviders';

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

  constructor(private newsReceiver: NewsReceiverService) { }

  ngOnInit() {
  }

  handleProviderChange() {
    this.localProviderStatus.emit();
  }
}
