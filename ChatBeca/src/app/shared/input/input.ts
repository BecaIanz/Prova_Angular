import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputComponent {

  @Input()
  Type: string = "text"

  @Input()
  value: string = "";

  @Output()
  OnChange: EventEmitter<string> = new EventEmitter<string>()


  changeText = (_value: Event) => {
    this.value = (_value.target as HTMLInputElement).value
    this.OnChange.emit(this.value)
  }

}
