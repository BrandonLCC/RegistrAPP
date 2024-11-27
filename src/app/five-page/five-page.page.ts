import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-five-page',
  templateUrl: './five-page.page.html',
  styleUrls: ['./five-page.page.scss'],
})
export class FivePagePage implements OnInit {
  cursoSeleccionado: any;


  constructor(private router: Router) { }

  ngOnInit() {
    this.cursoSeleccionado = this.router.getCurrentNavigation()?.extras.state;

  }
//Se llama justo antes de dejar una página. Podemos utilizar este evento para desactivar listeners, etc.
  ionViewDidLeave() {
    this.cursoSeleccionado = null;
    console.log("Limpiando datos al cambiar de pagina");
  }



}
