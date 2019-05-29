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
    this.serviceitem = [{nome: 'great-sword',
      difficolta: 'High',
      tipo: 'Spada',
      img: 'gsprova.jpg'
    },
      {nome: 'long-sword',
        difficolta: 'Medium',
        tipo: 'Spada',
        img: 'lsprova.jpg'
      },
      {nome: 'light-bowgun',
        difficolta: 'Easy',
        tipo: 'Artiglieria',
        img: 'lbgprova.jpg'
      },
      {nome: 'hammer',
        difficolta: 'Medium',
        tipo: 'Contundente',
        img: 'hummerprova.jpg'
      },
      {nome: 'hunting-horn',
        difficolta: 'Scozzese',
        tipo: 'Contundente',
        img: 'cornoprova.jpg'
      }];
    return this.serviceitem;
 }
}
