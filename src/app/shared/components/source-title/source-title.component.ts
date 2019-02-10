import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-source-title',
  templateUrl: './source-title.component.html',
  styleUrls: ['./source-title.component.scss'],
})
export class SourceTitleComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
