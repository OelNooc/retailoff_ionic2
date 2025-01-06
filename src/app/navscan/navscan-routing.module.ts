import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavscanPage } from './navscan.page';

const routes: Routes = [
  {
    path: '',
    component: NavscanPage,
    children: [
      {
        path: 'scan',
        loadChildren: () =>
          import('../scan/scan.module').then(m => m.ScanPageModule),
      },
      {
        path: 'historial',
        loadChildren: () =>
          import('../historial-scan/historial-scan.module').then(
            m => m.HistorialScanPageModule
          ),
      },
      {
        path: 'historial/map/:geo',
        loadChildren: () =>
          import('../map/map.module').then(m => m.MapPageModule),
      },
      {
        path: '',
        redirectTo: 'scan',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavscanPageRoutingModule {}
