import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { MenuItem } from '../model/menuItem.model';
import { MenuItemService } from '../../app/services/menu-item.service';
import { Router } from "@angular/router";

@Component({
  //selector: 'app-create-menu-item',
  templateUrl: './create-menu-item.component.html',
  styleUrls: ['./create-menu-item.component.css']
})
export class CreateMenuItemComponent implements OnInit {
  
  menuItem: MenuItem  = new MenuItem(0, '', 0, '');
  previewPhoto  = false;
  massage: String = "";

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto; 
  }
  
  constructor(
    private service: MenuItemService,
    private router: Router) { }

  ngOnInit(): void { 
  }

  saveMenuItem(miForm: NgForm) {

    var newMenuItem = new MenuItem(
        0, 
        miForm.value.name,
        miForm.value.price,
        miForm.value.photoPath
      );

    this.service.post(newMenuItem).subscribe(
      () => {
        this.massage = 'Data Saved Successfully';
      }
    );
    
    this.router.navigate(['/list'])
    // console.log(this.massage);
  }
}
