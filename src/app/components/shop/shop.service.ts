import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from './../../models/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getShopList():Observable<Shop[]>{
    return this.http.get<Shop[]>("assets/database/shop.json");
  }
}
