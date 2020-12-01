import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menuItem.model';

@Component({
  selector: 'app-list-menu-items',
  templateUrl: './list-menu-items.component.html',
  styleUrls: ['./list-menu-items.component.css']
})
export class ListMenuItemsComponent implements OnInit {

  menuItems: MenuItem[] = [
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
    {
      id: 4,
      name: 'Pizza #5',
      price: 18.05,
      photoPath: 'assets/images/pizza-2.jpg'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
