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
    this.enviarDatos();
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
    if(this.formData.length < 3){
      this.formData.push(data)
    }
    this.kanBanPressed = false; 
  }

  eliminarLayout(index:number){
    this.formData.splice(index, 1);
  }

}
