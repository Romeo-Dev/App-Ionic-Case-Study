import { Component, OnInit } from '@angular/core';
import {ItemModel} from '../item.model';
import {ItemsService} from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  private itemas : ItemModel[];
  constructor(private service: ItemsService) {


  }

  ngOnInit() {
    this.getAllItemMHW();
  }

  getAllItemMHW(){
    this.service.getAllItems().subscribe(res=> {
      this.itemas = res;
    });
  }
}
