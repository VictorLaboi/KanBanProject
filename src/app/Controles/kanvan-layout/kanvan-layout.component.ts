import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeworkFormComponent } from '../homework-form/homework-form.component';
import { TareaVisibleLayoutComponent } from '../tarea-visible-layout/tarea-visible-layout.component';

@Component({
  selector: 'app-kanvan-layout',
  standalone: false,
  templateUrl: './kanvan-layout.component.html',
  styleUrl: './kanvan-layout.component.css'
})
export class KanvanLayoutComponent {

  constructor() {
  }

    @Input({required:true})
    public title: string = '';

    @Input() //Parametro a recibir
    public descTareas: {nameTarea:string,descripcion:string}[] =[]   

    @Input()
    layoutDisponibles:{ nameTarea: string, descripcion: string }[] = [];

    agregarTar:boolean= false; 

    agregarT(){
      this.agregarTar = true; 
    }

    cancelarTarea(cancel:boolean){
      this.agregarTar = cancel; 
    }




    @Output() eliminar = new EventEmitter<void>(); 
    @Output() agregar = new EventEmitter<boolean>(); 

    eliminarFase(){
      this.eliminar.emit(); 
    }

    agregarTareas(){
      this.agregar.emit(true)
    }
    eliminarTareas(index:number){
      this.descTareas.splice(index, 1);
    }

    recibirDatos(datos:{nameTarea:string, descripcion:string}){
      this.descTareas.push(datos);
      this.agregarTar= false; 
    }

}
