import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAlumno1PageRoutingModule } from './pagina-alumno-1-routing.module';

import { PaginaAlumno1Page } from './pagina-alumno-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAlumno1PageRoutingModule
  ],
  declarations: [PaginaAlumno1Page]
})
export class PaginaAlumno1PageModule {}
