import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShopComponent } from './components/shop/shop.component';
import { WishComponent } from './components/wish/wish.component';

const routes: Routes = [
  {
    path: 'my-games',
    component:  GameComponent
  },
  {
    path: 'shop',
    component:  ShopComponent
  },
  {
    path: 'wish-list',
    component:  WishComponent
  },
  {
    path: 'profile',
    component:  ProfileComponent
  },
  {
    path: '**', redirectTo: 'profile'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }