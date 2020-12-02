import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menuItem.model';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private menuItems: MenuItem[] = [];

  constructor() { 
     this.menuItems = [
      {
        id: 1,
        name: 'Pasta #1',
        price: 11.15,
        photoPath: 'assets/images/pasta-1.jpg'
      },
      {
        id: 2,
        name: 'Pizza #1',
        price: 11.15,
        photoPath: 'assets/images/pizza-1.jpg'
      },
      {
        id: 3,
        name: 'Pasta #2',
        price: 22.05,
        photoPath: 'assets/images/pasta-2.jpg'
      },
  
    ];
  }

  getMenuItems(): MenuItem[] {
    
    return this.menuItems;
  }

  getMenuItem(id: number) : MenuItem {
    
    return this.menuItems[ id ];
  }
}
