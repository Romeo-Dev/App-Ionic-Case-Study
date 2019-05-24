import { Component } from '@angular/core';
import {WeaponModel} from '../weapon.model';
import {ExampleService} from './example.service';
import {NavigationExtras} from '@angular/router';
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weapons: WeaponModel[];
  wp: WeaponModel;

  constructor(private myservice: ExampleService, private  route: Router){
      this.weapons = this.myservice.getAllWeapon();
  }

  tryservice(){
    this.myservice.dosomething();
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

  }

