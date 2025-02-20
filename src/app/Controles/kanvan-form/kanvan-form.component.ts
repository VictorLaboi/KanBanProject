import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-kanvan-form',
  standalone: false,
  templateUrl: './kanvan-form.component.html',
  styleUrl: './kanvan-form.component.css'
})
export class KanvanFormComponent {
  
  formUser!: FormGroup; // Declaramos la variable sin inicializarla

  constructor(private fb: FormBuilder) {
    this.formUser = this.fb.group({
      nameFase: ['', Validators.required],
      encargado: [''],
      descripcion: ['', Validators.required]
    });
  }
  
  get nameFase(){
    return this.formUser.get('nameFase') as FormControl; 
  }

  get encargado(){
    return this.formUser.get('encargado') as FormControl; 
  }

  get descripcion(){
    return this.formUser.get('descripcion') as FormControl; 
  }

  procesar(){
    console.log(this.formUser.value)
  }


}
