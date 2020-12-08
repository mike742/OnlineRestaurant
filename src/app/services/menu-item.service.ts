import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menuItem.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private menuItems: MenuItem[] = [];
  private API_SERVER = 'https://localhost:5001/MenuItem';
  invalidLogin: boolean = true;

  constructor(private http: HttpClient) { }

  get() : Observable<MenuItem[]> {

    return this.http.get<MenuItem[]>(this.API_SERVER);
    
  }







  
  getMenuItems(): MenuItem[] {
    
    return this.menuItems;
  }

  private getSelectedIndex(id: number) {
    for(var i = 0; this.getMenuItem.length; ++i) {
      
      if(this.menuItems[i].id == id) {
        return i;
      }
    }

    return -1;
  }

  getMenuItem(id: number) : MenuItem {
    
    return this.menuItems[ this.getSelectedIndex(id) ];
  }

  addMenuItem(mi: MenuItem) {
    
    this.menuItems.push(mi);
  }
}
