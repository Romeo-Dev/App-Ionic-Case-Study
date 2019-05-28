import { Component } from '@angular/core';
import {WeaponModel} from '../weapon.model';
import {ExampleService} from './example.service';
import {NavigationExtras} from '@angular/router';
import {Router} from '@angular/router';
import {UtenteModel} from '../utente.model';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

// @ts-ignore
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weapons: WeaponModel[];
  wp: WeaponModel;
  utente: UtenteModel = null;

  constructor(private myservice: ExampleService, private  route: Router,private store: Storage,private navCtrl: NavController){
      this.weapons = this.myservice.getAllWeapon();
      this.store.get('utente').then(res =>{
        this.utente = res;
        console.log(this.utente.username);
      },err =>{
        console.log('Utente ancora non loggato accedere alla registrazione');
      })
  }

  tryservice(){
    this.store.clear().then(res=>{
      console.log('storage pulito e procedura logout');
    })
  }

  goToSingleWeapon(w:WeaponModel){
    this.wp = w;

    let extras: NavigationExtras = {
      state: {
        obj: this.wp
      }
    };
    this.route.navigate(['wpdetails'], extras);
  }

  goToLoginForm(){
    this.navCtrl.navigateForward('login');
    }
}

