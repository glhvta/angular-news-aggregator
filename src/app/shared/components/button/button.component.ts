import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.buttonClick.emit();
  }
}
