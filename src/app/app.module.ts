import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TareaComponent } from './tarea/tarea.component';
import { PieComponent } from './pie/pie.component';
import { FormsModule } from '@angular/forms';
import { DatosappService } from './datosapp.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    TareaComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatosappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
