import { Component, OnInit } from '@angular/core';
import { DatosappService } from '../datosapp.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  datos:DatosappService;
  mistareas = new Array();
  constructor(d:DatosappService) {
    this.datos=d
    this.mistareas = d.listatareas;

   }

  ngOnInit(): void {
    if(localStorage["listatareas"]){
      this.mistareas = JSON.parse(localStorage["listatareas"])
    }
  }
  deleteall(){
    this.mistareas.splice(0, this.mistareas.length);
    this.datos.actualizalocalStorage()
  }
  borrarHechas(){
    this.mistareas = this.mistareas.filter(tarea => tarea.hecha==false)
    this.datos.actualizalocalStorage()
  }
  calcularHechas(){
    let hechas = 0;
    for (let e of this.mistareas){
      if (e.hecha==true){
      hechas+=1}
      }
      return hechas;
    }
}
