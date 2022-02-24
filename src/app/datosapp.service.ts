import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatosappService {
  
  listatareas= new Array();
  tareasmodificar = new Array();
  nuevatarea =new String();
  busqueda = new String();
  
  constructor() { 
    
  }
  actualizalocalStorage(){
    localStorage["listatareas"] = JSON.stringify(this.listatareas);
  }
}
