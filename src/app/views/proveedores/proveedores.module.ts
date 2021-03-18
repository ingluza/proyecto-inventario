import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";



import { CrearProveedoresComponent } from './crearproveedores.component';
import { ProveedoresRoutingModule } from './proveedores-routing.module';

@NgModule({
  imports: [ ProveedoresRoutingModule,
  ReactiveFormsModule,
  CommonModule],
  declarations: [CrearProveedoresComponent]
})
export class ProveedoresModule { }
