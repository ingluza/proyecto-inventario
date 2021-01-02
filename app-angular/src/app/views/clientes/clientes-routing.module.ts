import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';

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
        component: ClientesComponent,
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
