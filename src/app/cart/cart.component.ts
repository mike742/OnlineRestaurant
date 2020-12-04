import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../model/menuItem.model';
import { Item } from '../model/item.model';
import { MenuItemService } from '../services/menu-item.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private service: MenuItemService) { }

  ngOnInit(): void { 
    this.loadCart();
  } 

  loadCart() : void {
    let dataSourse = localStorage.getItem('cartData') || null; 

    if(dataSourse != null) {

      let cartData = JSON.parse(dataSourse);

      console.log(cartData);

      for(let i = 0; i < cartData.length; ++i) {
        let menuItem = this.service.getMenuItem( JSON.parse(cartData[i]).id );
        let q: number = JSON.parse(cartData[i]).qty; 

        let item = new Item(menuItem, q);
        
        this.total += menuItem.price * q;
        this.items.push(item);
      }
    } 
  }

}
