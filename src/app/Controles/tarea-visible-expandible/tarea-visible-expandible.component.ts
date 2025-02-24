import { ChangeDetectorRef, Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { filter, Subscription } from 'rxjs';
import { CommunicationServicesService } from '../../Services/communication-services.service';

@Component({
  selector: 'app-tarea-visible-expandible',
  standalone: false,
  templateUrl: './tarea-visible-expandible.component.html',
  styleUrl: './tarea-visible-expandible.component.css'
})
export class TareaVisibleExpandibleComponent {
  @Input() tituloTarea: string = '';
  @Input() descripcion: string = '';
  @Output() valores = new EventEmitter<{ nombreTarea: string, descripcion: string, color: string }>();
  @Output() cerrar = new EventEmitter<boolean>();

  colores: string[] = ['Completado', 'Pendiente', 'En proceso'];
  
  formUser!: FormGroup;
  private subscription!: Subscription;

  constructor(private fb: FormBuilder, private communication: CommunicationServicesService, private cdr: ChangeDetectorRef) {
    this.formUser = this.fb.group({
      nameTarea: ['', Validators.required],
      descripcion: ['', Validators.required],
      layoutColor: ['Pendiente', Validators.required] 
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

  get selectedColor() {
    return this.formUser.get('layoutColor');
  }

  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.formUser.patchValue({ layoutColor: selectElement.value });
  }

  submitForm() {
    if (this.formUser.valid) {
      this.valores.emit({
        nombreTarea: this.nameFase?.value,
        descripcion: this.descrip?.value,
        color: this.selectedColor?.value
      });
    }
    this.close();
  }

  close() {
    this.cerrar.emit(false);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
