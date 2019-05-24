import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MonsterModel} from '../monster.model';
import {NavigationExtras, Router} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  private detail: MonsterModel;
  constructor(private route: ActivatedRoute, private router: Router) {
     this.detail = this.router.getCurrentNavigation().extras.state.obj;
  }

  ngOnInit() {

  }

}
