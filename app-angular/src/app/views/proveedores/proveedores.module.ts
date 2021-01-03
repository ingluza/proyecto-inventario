import { NgModule } from '@angular/core';

import { CrearProveedoresComponent } from './crearproveedores.component';
import { ProveedoresRoutingModule } from './proveedores-routing.module';

@NgModule({
  declarations: [CrearProveedoresComponent],
  imports: [ ProveedoresRoutingModule
  ]
})
export class ProveedoresModule { }
