import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavigationExtras, Router} from '@angular/router';
import {WeaponModel} from '../weapon.model';
import {WpdetailsService} from './wpdetails.service';
// @ts-ignore
import {Postmodel} from '../postmodel';
import {subscriptionLogsToBeFn} from 'rxjs/internal/testing/TestScheduler';


@Component({
  selector: 'app-wpdetails',
  templateUrl: './wpdetails.page.html',
  styleUrls: ['./wpdetails.page.scss'],
})
export class WpdetailsPage implements OnInit {
    mywp: WeaponModel;
    mypost: Postmodel[];

  constructor(private activate: ActivatedRoute, private router: Router,private detail: WpdetailsService) {
    this.mywp = this.router.getCurrentNavigation().extras.state.obj;
  }

  ngOnInit() {
      this.getDetailPosts();
  }

  getDetailPosts(){
     this.detail.getSwitchAxe().subscribe( res =>{
      this.mypost = res;
      console.log(this.mypost);
    });
  }

  getAllWpByType(type: string){
      this.detail.getAllLongSword(type).subscribe(res=>{
         this.mypost = res;
         console.log(this.mypost);
      });
  }


  ngOnDestroy(){


  }

}
