import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavscanPage } from './navscan.page';

const routes: Routes = [
  {
    path: '',
    component: NavscanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavscanPageRoutingModule {}
