import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { MenuItemService } from '../../app/services/menu-item.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  invalidLogin: boolean = false;

  constructor(
      private http: HttpClient, 
      private router: Router,
      private service: MenuItemService) {  }

  ngOnInit(): void {
  }
  
  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    
    console.log(JSON.stringify(form.value));

    this.http.post("https://localhost:5001/Auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.service.invalidLogin = false;

      this.router.navigate(["/list"]);
    }, err => {
      this.invalidLogin = true;
      this.service.invalidLogin = true;
      
    });
  }
}
