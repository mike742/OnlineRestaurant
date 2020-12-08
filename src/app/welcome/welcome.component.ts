import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuItemService } from '../../app/services/menu-item.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private service: MenuItemService,
    private router: Router
    //private header: HttpHeaders
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm ) {

    const url = 'https://localhost:5001/Auth/login';
    const body = JSON.stringify(form.value);
    const header = new HttpHeaders({
      "Content-Type": "application/json"
    });

    this.http.post(url, body, { headers: header })
      .subscribe(
        (responce: any) => {
          const token = responce.token;
          console.log(token);
          this.service.invalidLogin = false;

          this.router.navigate(["/list"]);
        },
        err => {
          console.log(err.message);
          this.service.invalidLogin = true;
        }
      );


  }
}
/*
johndoe
def@123
*/