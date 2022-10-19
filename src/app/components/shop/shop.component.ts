import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shopList: Shop[] = [];
  spinner: boolean = true;//ainda nao carregou os dados ent spinner deve aparecer(true)

  constructor(private shopService : ShopService) { }

  ngOnInit(): void {
    this.getShopList()
  }

  getShopList(){
    this.shopService.getShopList().subscribe(shopList => {
      this.shopList = shopList;
      this.spinner = false; //terminou de carregar os dados da loja ent o spinner deve sumir(false)
    });
  }

}
