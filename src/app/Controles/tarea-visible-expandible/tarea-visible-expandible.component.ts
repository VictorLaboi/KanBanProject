import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tarea-visible-expandible',
  standalone: false,
  templateUrl: './tarea-visible-expandible.component.html',
  styleUrl: './tarea-visible-expandible.component.css'
})
export class TareaVisibleExpandibleComponent {

  @Input() tituloTarea: string = '';
  @Input() descripcion: string = '';
  @Output() valores = new EventEmitter<{ nombreTarea: string, descripcion: string }>();
  @Output() cerrar = new EventEmitter<boolean>();

  formUser!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formUser = this.fb.group({
      nameTarea: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.formUser.patchValue({
      nameTarea: this.tituloTarea,
      descripcion: this.descripcion
    });
  }

  get nameFase() {
    return this.formUser.get('nameTarea');
  }
  get descrip() {
    return this.formUser.get('descripcion');
  }

  submitForm() {
    if (this.formUser.valid) {
      this.valores.emit({
        nombreTarea: this.nameFase?.value,
        descripcion: this.descrip?.value
      });
    }
    this.close()
  }
  close(){
    this.cerrar.emit(false);
  }
}
