import { Injectable } from '@angular/core';
import {IFruits} from './ifruits';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  constructor(private http:Http) { }

  getFruits(): Observable<IFruits[]>{
    return this.http.get('./assets/fruit.json').map((resp:Response)=> resp.json());
    //console.log(IFruits);

 }
}
