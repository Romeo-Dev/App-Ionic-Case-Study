import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {UtenteModel} from '../utente.model';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  utente: UtenteModel;

  constructor(private formbuilder: FormBuilder, private store: Storage,private navCtrl: NavController) {

  }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      username: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
      email: ['', Validators.compose([Validators.required,Validators.email])],
      password: ['',Validators.compose([Validators.minLength(5),Validators.required])],
      conferma: ['',Validators.compose([Validators.minLength(5),Validators.required])]
    });
  }


  onLogin(){
    this.utente = new UtenteModel(this.loginForm.value.username,this.loginForm.value.email,this.loginForm.value.password)
      this.store.set('utente',this.utente);
    this.navCtrl.navigateRoot('home');
  }

  stampaLog(){
    this.store.get('utente').then(res =>{
      console.log('My name is '+res.username);
    })
  }
}
