import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

// @ts-ignore
import {Postmodel} from '../postmodel';

@Injectable({
  providedIn: 'root'
})
export class WpdetailsService {

  post: Observable<Postmodel>;
  constructor(public http: HttpClient) {

  }
  getSwitchAxe(): Observable<Postmodel>{
    this.post = this.http.get<Postmodel>('https://mhw-db.com/motion-values/great-sword');
     return  this.post;
  }

}
