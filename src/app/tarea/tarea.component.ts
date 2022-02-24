import { Component, Input, OnInit } from '@angular/core';
import { DatosappService } from '../datosapp.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
variable =""
  datos:DatosappService;
  mistareas = new Array();
  tareasmodificar = new Array();
  nuevatarea : any;
  busqueda = new String();
  

  constructor(d:DatosappService) {
    this.datos = d
    this.mistareas = d.listatareas;
    this.tareasmodificar = this.mistareas
   }
   
  ngOnInit(): void {
    if(localStorage["listatareas"]){
      this.mistareas = JSON.parse(localStorage["listatareas"])
    }
    this.tareasmodificar = this.mistareas
  }
  add(){
    this.mistareas.push(
      {
        nombre : this.nuevatarea,
        fecha : new Date(),
        prioridad : 1,
        hecha: false,
      }
    );
    this.datos.actualizalocalStorage()
    this.nuevatarea="";
    console.log(this.datos.listatareas)
  }
  hacer(index:any){
    this.mistareas[index].hecha = !this.mistareas[index].hecha;
    this.datos.actualizalocalStorage()
  }
  calculaDiferencia(index:any){
    let fechatarea = new Date (this.mistareas[index].fecha)
    let fechaHoy = new Date().getTime() - fechatarea.getTime();
    return Math.round(fechaHoy/60000)
  }

  prioridadAlta(index:any){
    this.mistareas[index].prioridad = 0
    let tarea = this.mistareas.splice(index,1)   
      this.mistareas.unshift(tarea[0])
      this.datos.actualizalocalStorage()
  }
  prioridadMedia(index:any){
    this.mistareas[index].prioridad = 1
    this.ordenar()
    this.datos.actualizalocalStorage()
  }
  prioridadBaja(index:any){
    this.mistareas[index].prioridad = 2
    let tarea = this.mistareas.splice(index,1)   
      this.mistareas.push(tarea[0])
      this.datos.actualizalocalStorage()
  }
  borra(index:any){
    this.mistareas.splice(index,1)
    this.datos.actualizalocalStorage()
  }
  mostrarTerminadas(){
    this.tareasmodificar = this.mistareas.filter(tarea => tarea.hecha == true)
    this.datos.actualizalocalStorage()
  }
  mostrarSinTerminar(){
    this.tareasmodificar = this.mistareas.filter(tarea => tarea.hecha == false)
    this.datos.actualizalocalStorage()
  }
  mostrarTodas(){
    this.tareasmodificar = this.mistareas
    this.datos.actualizalocalStorage()
  }
  buscar(){
    this.tareasmodificar = this.mistareas.filter(tarea => tarea.nombre.includes(this.busqueda))
  }
  ordenar(){
    this.tareasmodificar.sort((a,b)=>{return a.prioridad-b.prioridad});
  }
}

