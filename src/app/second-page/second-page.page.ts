import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../service/autenticacion.service';
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
  correo: string = ''; // Declara la propiedad correo
  constructor(private router: Router, private auth: AutenticacionService) { }

  
  ngOnInit() {
    // Acceder al estado pasado desde la primera página
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.correo = navigation.extras.state['correo'];
    }
  }

}
