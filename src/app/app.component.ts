import { Component } from '@angular/core';
import { MenuItemService } from '../app/services/menu-item.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: MenuItemService, private router: Router) { }

  logOut() {
    debugger
    this.service.invalidLogin = true;
    this.router.navigate(["/list"]);
  }
  
  ifLogin() {
    return !this.service.invalidLogin;
  }

}
