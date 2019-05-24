import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  svmonster: any[];

  constructor() {

  }



  getAllMonster(){
    this.svmonster = [{
      nome: 'DevilJho',
      taglia: 'Grande',
      difficolta: 5,
      wyvern: 'Brutale',
      img: 'devil.png',
      imgdetail:'deviljho.webp',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      nome: 'Nergigante',
      taglia: 'Grande',
      difficolta: 5,
      wyvern: 'Anziano',
      img: 'nergi.png',
      descr:'The key element of fighting Nergigante is keeping an eye on the spikes that periodically grow on its body. These spikes appear on four areas: Wings, Forelegs, Head, and Tail.\n' +
          '\n' +
          '    When the spikes first grow, they have a yellow/white color and are a breakable weak spot.\n' +
          '    As time passes, the spikes will harden and turn black. After this point, they are no longer a weak spot and may deflect attacks.\n' +
          '    Spiked body parts will do increased damage, and some attacks will be augmented by the spikes.\n' +
          '        If Nergigante has grown spikes on its head, it will launch them forward after performing a normal head-slam.\n' +
          '        Occasionally Nergigante will rear back, walk forward, and slam its front leg down. If the leg is spiked, the attack will launch the spikes in all directions.\n',
      imgdetail:'nergidetail.jpg'
    },{
      nome: 'Odogaron',
      taglia: 'Medium',
      difficolta: 4.3,
      wyvern: 'Rettile',
      img: 'odo.png',
      imgdetail:'odogarondetail.jpg',
      descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      nome: 'Dodogama',
      taglia: 'Medium',
      difficolta: 3,
      wyvern: 'Roccioso',
      img: 'dodogama.png',
      imgdetail:'dodogamadetail.jpg',
      descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      nome: 'Diablos Nera',
      taglia: 'Grande',
      difficolta: 5,
      wyvern: 'Alato',
      img: 'diablos.webp',
      imgdetail:'diablosdetail.webp',
      descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
    ];

    return this.svmonster;
  }
}
