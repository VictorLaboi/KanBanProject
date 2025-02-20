import { Component, Input, OnInit } from '@angular/core';
import { CommunicationServicesService } from '../../Services/communication-services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movement-controller',
  standalone: false,
  templateUrl: './movement-controller.component.html',
  styleUrl: './movement-controller.component.css'
})
export class MovementControllerComponent implements OnInit {

  titulosDeLayout: { nameTarea: string, descripcion: string }[] = [];
  private subscription!: Subscription;

  constructor(private communication: CommunicationServicesService) {}

  ngOnInit(): void {
    this.subscription = this.communication.$event.subscribe(evento => {
      if (evento) {
        this.titulosDeLayout = evento;
        this.titulosDeLayout.forEach(index => {
          console.log(index.nameTarea);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Desuscribirse cuando el componente se destruye
  }
}
