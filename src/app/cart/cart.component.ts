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

    this.items = [];
    this.total = 0;

    let dataSourse = localStorage.getItem('cartData') || null; 
    //debugger;
    if(dataSourse != null) {

      let cartData = JSON.parse(dataSourse);

      console.log(cartData);

      for(let i = 0; i < cartData.length; ++i) {
        let menuItem = this.service.getMenuItem( JSON.parse(cartData[i]).id );
         
        let q: number = JSON.parse(cartData[i]).qty; 

        let item = new Item(menuItem, q);
        
        //this.total += menuItem.price * q;
        debugger;
        this.items.push(item);
      }
    } 
  }

  getTotal() {
     return this.items.reduce( (a, b) => a + b.menuItem.price * b.quantity, 0 ).toFixed(2)
  }

  onchange(i: number, value: number) {
    this.items[i].quantity = value;
  }

  remove(idx: number): void {
    // console.log(idx);

    let dataSourse = localStorage.getItem('cartData') || null; 

    if(dataSourse != null) {
      let cartData = JSON.parse(dataSourse);
      
      cartData.splice(idx, 1);
      localStorage.setItem(  'cartData', JSON.stringify(cartData));
    }

    this.loadCart();
  }
}
