import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class SourceTitleComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
