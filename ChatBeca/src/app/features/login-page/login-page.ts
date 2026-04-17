import { Component } from '@angular/core';
import { InputComponent } from '../../shared/input/input';
import { Button } from '../../shared/button/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { AuthApi } from '../../domain/auth.api';
import { LoginDto } from '../../domain/interfaces/UserInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputComponent, Button, FormsModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  constructor(
    private api: AuthApi,
    private _router: Router
  ){}

  LoginForm : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get Email(){
    return this.LoginForm.get("email")
  }
  get Password(){
    return this.LoginForm.get("password")
  }

  login = () => {
    if(!this.LoginForm.valid){
      alert("Campos Inválidos")
      return
    }

    const data: LoginDto = {
      password: this.Password?.value,
      email: this.Email?.value
    }

    this.api.login(data).subscribe(
      res =>{
        console.log(res)
        sessionStorage.setItem("token", res)
        this._router.navigate(['/contacts']);
      } 
    )

  }

  typePassword: string = "password"
  typeButton: string = "submit"
  email: string = ""
  password: string = ""

  onClick = () => {
    console.log(this.email)
    console.log(this.password)
  }
  changeEmail = (text: string) => {
    this.email = text
  }
  changePassword = (text: string) => {
    this.password = text
  }
}
