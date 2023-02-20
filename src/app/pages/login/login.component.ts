import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { Service } from 'src/app/service/AppService';
import { AppComponent } from '../../app.component';
import { AppComponentForm } from '../main/app.componentform';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit 
{

  loginForm!: FormGroup;

  constructor(private formBuilder : FormBuilder,
    private router: Router, public appService : Service, public appComponent : AppComponent, public appComponentForm : AppComponentForm) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required]]
      }
    );
  }

  submitLogin(){
    debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    this.appService.LoginUsuario(dadosLogin).subscribe(
      token =>
      {
        debugger
        var nossoToken = Token
        const myTok = token
        this.appService.setToken(myTok); 
        debugger
        this.router.navigate(['./pages/main/app.componentform']);
      },
      erro => {}
    )
  }    

}
