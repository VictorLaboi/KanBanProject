import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homework-form',
  standalone: false,
  templateUrl: './homework-form.component.html',
  styleUrl: './homework-form.component.css'
})
export class HomeworkFormComponent {

  formUser!: FormGroup; // Declaramos la variable sin inicializarla

  constructor(private fb: FormBuilder) {
    this.formUser = this.fb.group({
      nameTarea: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }
  
  get nameFase(){
    return this.formUser.get('nameTarea') as FormControl; 
  }
  get descripcion(){
    return this.formUser.get('descripcion') as FormControl; 
  }

  @Output() cancelarBoton = new EventEmitter<boolean>();

  @Output() enviarDatos= new EventEmitter<{nameTarea:string, descripcion:string}>();

  btnCancelar() {
    this.cancelarBoton.emit(false);
    console.log('Se ha enviado falso correctamente!');
  }

  submitForm(){
    if (this.formUser.valid) {
      this.enviarDatos.emit(this.formUser.value);
      }
  } 

}
