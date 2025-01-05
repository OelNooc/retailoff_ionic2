import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';

import { Routes, RouterModule } from '@angular/router';

import { MenuPageModule } from '../menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: UserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    RouterModule.forChild(routes),
    MenuPageModule
  ],
  declarations: [UserPage]
})
export class UserPageModule {}