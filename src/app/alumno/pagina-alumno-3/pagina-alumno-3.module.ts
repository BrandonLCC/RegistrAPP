import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAlumno3PageRoutingModule } from './pagina-alumno-3-routing.module';

import { PaginaAlumno3Page } from './pagina-alumno-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAlumno3PageRoutingModule
  ],
  declarations: [PaginaAlumno3Page]
})
export class PaginaAlumno3PageModule {}
