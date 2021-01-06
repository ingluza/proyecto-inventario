import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CrearProveedoresComponent } from './crearproveedores.component';
import { ProveedoresRoutingModule } from './proveedores-routing.module';

@NgModule({
  imports: [ ProveedoresRoutingModule,
  ReactiveFormsModule],
  declarations: [CrearProveedoresComponent]
})
export class ProveedoresModule { }
