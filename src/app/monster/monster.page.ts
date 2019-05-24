import { Component, OnInit } from '@angular/core';
import {MonsterModel} from '../monster.model';
import {MonsterService} from './monster.service';
import { ToastController } from '@ionic/angular';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.page.html',
  styleUrls: ['./monster.page.scss'],
})
export class MonsterPage implements OnInit {

  private monsters: MonsterModel[];
  private monster: MonsterModel;

  constructor(private service: MonsterService, public toast: ToastController,public route: Router) {
    this.monsters = this.service.getAllMonster();
  }

  ngOnInit() {
  }


  async makeToastDetails(monster: MonsterModel){
    const toast = await this.toast.create({
      message: 'Mostro:\t'+monster.nome+'\nDifficult:\t'+monster.difficolta+'\nTaglia:\t'+monster.taglia+'\nWyvern:\t'+monster.wyvern,
      duration: 3500
    });
    toast.present();
  }

  detailsMonster(mon: MonsterModel) {
    this.monster = mon;

    let extras: NavigationExtras = {
      state: {
        obj: this.monster
      }
    };
      this.route.navigate(['details'], extras);
  }

}
