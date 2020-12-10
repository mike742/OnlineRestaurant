import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../model/menuItem.model';
import { MenuItemService } from '../../app/services/menu-item.service';
import { Router } from "@angular/router";

@Component({
  //selector: 'app-list-menu-items',
  templateUrl: './list-menu-items.component.html',
  styleUrls: ['./list-menu-items.component.css']
})
export class ListMenuItemsComponent implements OnInit {

  menuItems: MenuItem[] = [];
  
  constructor(
    private service: MenuItemService,
    private router: Router,
    ) { }

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
    localStorage.setItem( 'cartData', JSON.stringify(json) );
  }

  clearCartData() : void {
    localStorage.setItem( 'cartData', '' ); 
  }
 
  getMenuItems() {
    this.service.get().subscribe((data: any[])=>{
      console.log(data);
      this.menuItems = data;
    });    
  }

  getAll () {
    return this.menuItems;
  }

  remove(id: number) {
    const index = this.menuItems?.findIndex(c => c.id == id) || -1;
    //debugger;

    if (index > -1) {
      this.menuItems.splice(+index, 1);
    }
    this.service.delete(id);
    
    /*
    this.service.get().subscribe((data: any[])=>{
      console.log(data);
      this.menuItems = data;
    });
    */
  }

  ifLogin() {
    return !this.service.invalidLogin;
  }
}  