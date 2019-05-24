import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {

  }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      username: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
      email: ['', Validators.compose([Validators.required,Validators.email])],
      password: ['',Validators.compose([Validators.minLength(5),Validators.required])],
      conferma: ['',Validators.compose([Validators.minLength(5),Validators.required])]
    });
  }

}
