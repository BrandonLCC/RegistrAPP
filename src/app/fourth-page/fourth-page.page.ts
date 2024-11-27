
import { Component, OnInit, viewChild, viewChildren } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.page.html',
  styleUrls: ['./fourth-page.page.scss'],
})
export class FourthPagePage implements OnInit {
  lenghtCursos: number=0;

  constructor(private router:Router) {}
  seccion: string[] = ['001-D', '002-V', '005-D','008-D'];
  materias: string[] = ['Programación Movil', 'Arquitectura', 'Matematica II','Portafolio'];
  sigla: string[] = ['PGY-4121', 'ASY-4131', 'MAT-4131','PORT-3210'];
  DescripcionMateria: string[] = ['Programación utilizando ionic, angular y otras aplicaciónes',
                                   'Creación de proyectos utilizando arquitecturas y atributos de calidad',
                                    'Resolución de problemas matematicos con excel',
                                    'Aqui se realiza las actividades de portafolio.'];

  imagenMateria: string[] = [
    '../assets/img/programacion.png', 
    '../assets/img/arquitectura.webp', 
    '../assets/img/matematica.jpg',
    '../assets/img/portafolio.jpg'
  ];
  profesor: string = 'NOMBRE';

  cursos = this.materias.map((materia, index) => ({
    materia: materia,
    materias: materia,
    seccion: this.seccion[index],
    sigla: this.sigla[index],
    imagenMateria: this.imagenMateria[index],
    profesor: this.profesor,
    DescripcionMateria: this.DescripcionMateria[index]
  }));

  ngOnInit() {
    this.lenghtCursos = this.cursos.length
    console.log(this.lenghtCursos)

  }

  

  irPagina5ConDatos (curso: any){
    this.router.navigateByUrl('/five-page', {state: { materia:curso.materias,
                                                      seccion:curso.seccion, 
                                                      sigla: curso.sigla,
                                                      profesor: curso.profesor,
                                                      DescripcionMateria: curso.DescripcionMateria,
                                                      imagenMateria: curso.imagenMateria
                                                    }})
  }


}
