import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommunicationServicesService {

  communication = new BehaviorSubject<any>(null)
  $event = this.communication.asObservable();
  emitEvent(data:any){
    this.communication.next(data)
  }
}
