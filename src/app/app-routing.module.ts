import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMenuItemsComponent } from './menuItems/list-menu-items.component';
import { CreateMenuItemComponent } from './menuItems/create-menu-item.component';
import { CartComponent } from './cart/cart.component';
import { WelcomeComponent } from '../app/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'list', component: ListMenuItemsComponent },
  { path: 'create', component: CreateMenuItemComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
