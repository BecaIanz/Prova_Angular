import { Component, Input} from '@angular/core';
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
  value: string = ""

}
