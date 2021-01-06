import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: 'crearproveedores.component.html'
})
export class CrearProveedoresComponent implements OnInit {

  get contacto(): FormArray {
    return this.formularioContacto.get('contacto') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  formularioContacto: FormGroup;

  ngOnInit() {
    this.crearFormulario();
    this.anadirContacto();
  }

  crearFormulario() {
    this.formularioContacto = this.fb.group({
      contacto: this.fb.array([])
    });
   }

   anadirContacto() {
    const nuevoContacto = this.fb.group({
      nombreContacto: new FormControl(''),
      correoContacto: new FormControl(''),
      telefonoContacto: new FormControl('')
    });

    this.contacto.push(nuevoContacto);
  }

}
