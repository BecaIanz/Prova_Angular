import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  @Input()
  Type: string = "submit"
  @Input()
  Title: string = "Button"
  @Output()
  OnClick: EventEmitter<void> = new EventEmitter()

  onClickButton = () => {
    this.OnClick.emit()
  }
}
