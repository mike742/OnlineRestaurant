import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../model/menuItem.model';
import { MenuItemService } from '../../app/services/menu-item.service';

@Component({
  //selector: 'app-list-menu-items',
  templateUrl: './list-menu-items.component.html',
  styleUrls: ['./list-menu-items.component.css']
})
export class ListMenuItemsComponent implements OnInit {

  menuItems?: MenuItem[];
  
  constructor(private service: MenuItemService) { }

  ngOnInit(): void {

    this.service.get()
    .subscribe(
      (data: MenuItem[]) => {
        this.menuItems = data;
      }
    );
  }

  addCartData(id?: number, qty?: number) : void {
    // debugger;
    let cartData = localStorage.getItem( 'cartData' ) || '[]';
    let json = JSON.parse(cartData);

    // if

    json.push( JSON.stringify( {'id': id, 'qty': qty } ) );
    localStorage.setItem(  'cartData', JSON.stringify(json) );

    console.log( localStorage.getItem('cartData') );
  }

  clearCartData() : void {
    localStorage.setItem( 'cartData', '' );
    console.log( localStorage.getItem('cartData') );
  }

  ifLogin() {
    return !this.service.invalidLogin;
  }
}  