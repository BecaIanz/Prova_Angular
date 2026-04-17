import { Component } from '@angular/core';
import { InputComponent } from '../../shared/input/input';
import { Button } from '../../shared/button/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputComponent, Button, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  typePassword: string = "password"
  typeButton: string = "submit"
  
  email: string = ""
  password: string = ""
  constructor(){}

  onClick = () => {
    console.log(this.email)
  }
}
