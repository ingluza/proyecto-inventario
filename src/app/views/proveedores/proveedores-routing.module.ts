import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearProveedoresComponent } from './crearproveedores.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Proveedores'
    },
    children: [
      {
        path: '',
        redirectTo: 'proveedores'
      },
      {
        path: 'nuevo',
        component: CrearProveedoresComponent,
        data: {
          title: 'Nuevo proveedor'
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
