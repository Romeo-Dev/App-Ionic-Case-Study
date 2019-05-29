import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

// @ts-ignore
import {Postmodel} from '../postmodel';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WpdetailsService {

  post: Observable<Postmodel[]>;
  constructor(public http: HttpClient) {

  }
  getSwitchAxe(): Observable<Postmodel[]>{
    this.post = this.http.get<Postmodel[]>('https://mhw-db.com/weapons');
     return  this.post;
  }

  getAllLongSword(type: string): Observable<Postmodel[]>{
    this.post = this.http.get<Postmodel[]>('https://mhw-db.com/motion-values/'+ type);
    return this.post;
  }

}
