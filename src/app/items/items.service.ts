import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ItemModel} from '../item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

    items : Observable<ItemModel[]>;
  constructor(private http: HttpClient) { }


  getAllItems():Observable<ItemModel[]> {
   this.items = this.http.get<ItemModel[]>('https://mhw-db.com/items');
   return  this.items;
  }
}
