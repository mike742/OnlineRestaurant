import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMenuItemsComponent } from './menuItems/list-menu-items.component';
import { CreateMenuItemComponent } from './menuItems/create-menu-item.component';
import { CartComponent } from './cart/cart.component';
import { WelcomeComponent } from './welcome/welcome.component';
  import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListMenuItemsComponent,
    CreateMenuItemComponent,
    CartComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
