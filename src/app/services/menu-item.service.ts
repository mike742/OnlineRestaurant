import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menuItem.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private menuItems: MenuItem[] = [];
  private API_SERVER = 'https://localhost:5001/MenuItem/';
  invalidLogin: boolean = true;

  constructor(
    private http: HttpClient
    ) { }

  get() : Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.API_SERVER);
  }

  getById(id: number) : Observable<MenuItem> {
    return this.http.get<MenuItem>(this.API_SERVER + id);
  }

  getMenuItem(id: number) : MenuItem {
    
    let res: MenuItem = new MenuItem(0, '', 0, '');
    //debugger;
    this.getById(id).subscribe(
      (data: MenuItem) => {
        res.id = data.id;
        res.name = data.name;
        res.price = data.price;
        res.photoPath = data.photoPath;
      }

    );

    return res;
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



  addMenuItem(mi: MenuItem) {
    
    this.menuItems.push(mi);
  }
}
