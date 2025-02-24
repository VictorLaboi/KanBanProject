import { Component, OnInit } from '@angular/core';
import { KanvanLayoutComponent } from './Controles/kanvan-layout/kanvan-layout.component';
import { KanvanFormComponent } from './Controles/kanvan-form/kanvan-form.component';
import { CommunicationServicesService } from './Services/communication-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Kanvan Project';
  kanBanPressed: boolean = false;
  formData:{ nameTarea: string, descripcion: string }[] = [];
  pressed:boolean = false;

  ngOnInit(): void {
    this.loadData();
    if (this.formData.length > 0) {
      this.enviarDatos();
    }
  }
  constructor(private  communication:CommunicationServicesService) {
  }

  enviarDatos(){
    this.communication.emitEvent(this.formData);
  }

  mostrarFormulario() {
    this.kanBanPressed = true;
  }


  cancelarFormulario(estado: boolean) {
    this.kanBanPressed = estado;
  }
  recibirFormulario(data: { nameTarea: string, descripcion: string }){
    if (this.formData.length < 3) {
      this.formData.push(data);
      this.saveData();  // Guarda el estado actualizado
    }
    this.kanBanPressed = false;
  }

  eliminarLayout(index:number){
    this.formData.splice(index, 1);
    this.saveData();
  }

  saveData(){
    localStorage.setItem('kanbanLayout', JSON.stringify(this.formData));
  }

  loadData(){
    const estadoLayout =  localStorage.getItem('kanbanLayout');
    if(estadoLayout){
      this.formData = JSON.parse(estadoLayout);
    }
  }
}
