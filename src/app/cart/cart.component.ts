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

  constructor(private service: MenuItemService) { }

  ngOnInit(): void { 

    let dataSourse = localStorage.getItem('cartData'); 
    // console.log(dataSourse);

    if(dataSourse != null) {
      let menuItem = this.service.getMenuItem( JSON.parse(dataSourse)["id"] );
      let q: number = JSON.parse(dataSourse)["qty"]; 

      let item = new Item(menuItem, q);
      this.items.push(item);
      // console.log(item);
    }
  }

}
