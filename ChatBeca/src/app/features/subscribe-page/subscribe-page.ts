import { Component } from '@angular/core';
import { InputComponent } from '../../shared/input/input';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-subscribe-page',
  standalone: true,
  imports: [InputComponent, Button],
  templateUrl: './subscribe-page.html',
  styleUrl: './subscribe-page.css',
})
export class SubscribePage {
  typeButton: string = "submit"
  typePassword: string = "password"
  email: string = ""

  onClickButton = () => {
    
  }
}
