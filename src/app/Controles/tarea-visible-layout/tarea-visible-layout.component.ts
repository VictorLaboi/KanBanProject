import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationServicesService } from '../../Services/communication-services.service';

@Component({
  selector: 'app-tarea-visible-layout',
  standalone: false,
  templateUrl: './tarea-visible-layout.component.html',
  styleUrl: './tarea-visible-layout.component.css'
})
export class TareaVisibleLayoutComponent {

  constructor(mensaje:CommunicationServicesService) {
  }
    @Input() tituloDeTarea: string = '';
    @Input() descripcion: string = '';
    @Input() color: string= ''; 
    
    @Output() eliminar = new EventEmitter<boolean>(); 

    cerrarPopUp: boolean = false;
    moverLayout:boolean = false;
    mostrarCambios:boolean = false; 

    abrirPop(cerrar:boolean) {
      this.cerrarPopUp = cerrar;
    }
    abrirCambios(){
      this.mostrarCambios = true; 
    }

    abrir(){
      this.cerrarPopUp = true;
    }

    eliminarTarea() {
      this.eliminar.emit(true);
    }

    recibirDatos(data:{nombreTarea:string, descripcion:string,color:string}){
      this.tituloDeTarea =data.descripcion
      this.descripcion = data.descripcion
      this.color = data.color
    }

    estados(){
      switch(this.color){
        case 'En proceso': return 'en-proceso';
        case 'Completado': return 'terminado';
        case 'Pendiente': return 'pendiente';
        default: return '';
      }
    }

}
