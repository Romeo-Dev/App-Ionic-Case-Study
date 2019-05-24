import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ExampleService {
   serviceitem: any[];
   conta: number = 0;
  constructor() { }

  dosomething(){
    this.conta ++;
    console.log("mio custom servizio "+ this.conta);
  }

  getAllWeapon(){
    this.serviceitem = [{nome: 'Great Sword',
      difficolta: 'High',
      tipo: 'Spada',
      img: 'gsprova.jpg'
    },
      {nome: 'Long Sword',
        difficolta: 'Medium',
        tipo: 'Spada',
        img: 'lsprova.jpg'
      },
      {nome: 'Light Bow Gun',
        difficolta: 'Easy',
        tipo: 'Artiglieria',
        img: 'lbgprova.jpg'
      },
      {nome: 'Hummer',
        difficolta: 'Medium',
        tipo: 'Contundente',
        img: 'hummerprova.jpg'
      },
      {nome: 'Hunting Horn',
        difficolta: 'Scozzese',
        tipo: 'Contundente',
        img: 'cornoprova.jpg'
      }];
    return this.serviceitem;
 }
}
