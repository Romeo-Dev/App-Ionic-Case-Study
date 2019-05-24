import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavigationExtras, Router} from '@angular/router';
import {WeaponModel} from '../weapon.model';
import {WpdetailsService} from './wpdetails.service';
// @ts-ignore
import {Postmodel} from '../../postmodel';


@Component({
  selector: 'app-wpdetails',
  templateUrl: './wpdetails.page.html',
  styleUrls: ['./wpdetails.page.scss'],
})
export class WpdetailsPage implements OnInit {
    mywp: WeaponModel;
    mypost: Postmodel;
  constructor(private activate: ActivatedRoute, private router: Router,private detail: WpdetailsService) {
    this.mywp = this.router.getCurrentNavigation().extras.state.obj;
    this.getDetailPosts();
  }

  ngOnInit() {
  }

  getDetailPosts(){
    this.detail.getSwitchAxe().subscribe( res =>{
      this.mypost = res;
      console.log(this.mypost);
    })
  }
}
