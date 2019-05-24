import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Weapons',
      url: '/home',
      icon: 'home',
      color: 'primary'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person',
      color: 'primary'
    },
    {
      title: 'Monster',
      url: '/monster',
      icon: 'bonfire',
      color: 'tertiary'
    },
    {
      title: 'Map',
      url: '/map',
      icon: 'compass',
      color: 'primary'
    },
    {
      title: 'Armor',
      url: '/armor',
      icon: 'logo-octocat',
      color: 'primary'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
