import { NgModule } from '@angular/core';
import { ClientesComponent } from './clientes.component';

import { ClientesRoutingModule } from './clientes-routing.module';

@NgModule({
  declarations: [ClientesComponent],
  imports: [ClientesRoutingModule]
})
export class ClientesModule { }
