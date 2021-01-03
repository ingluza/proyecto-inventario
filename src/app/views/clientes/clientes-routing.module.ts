import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearClientesComponent } from './crearclientes.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Clientes'
    },
    children: [
      {
        path: '',
        redirectTo: 'clientes'
      },
      {
        path: 'nuevo',
        component: CrearClientesComponent,
        data: {
          title: 'Cards'
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
export class ClientesRoutingModule { }
