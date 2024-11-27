import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AutenticacionService } from '../service/autenticacion.service';

//Con estas importaciones nos ayudara a las validaciones de los input (test con jassmin)
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})

export class FirstPagePage implements OnInit {
  loginFormulario: FormGroup; //Formulario 
  mensaje: string = ''; //Mensaje de error o exito 

  nombre: string = ''; // Declaro la propiedad username
  contrasena: string = ''; // Declaro la propiedad password
  inputValidoPass: boolean = true; //El focus del login
  logueado: boolean = false; //Si los datos exiten, permitira acceder al sistema

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private alertController: AlertController,
              private authService: AuthService, 
              private aut:AutenticacionService) { 

  //Inicializar el formulario 
  this.loginFormulario = this.formBuilder.group({
  //Required: Requerido o que es obligatorio
  nombre: ['', Validators.required], 
  contrasena: ['', Validators.required], 

  });

  } 

  ngOnInit() {}

  ionViewDidLeave() {
    console.log("Limpiando datos al cambiar de pagina");
    this.inputValidoPass = true; 
    this.nombre = '';
    this.contrasena = '';
    this.mensaje = '';

  }

   //El metodo que se ejecuta al presionar el boton iniciar sesion
gotoSecondPage() {
  const {nombre, contrasena}=this.loginFormulario.value
  
    if (this.authService.validateUser(nombre,contrasena)){
    // Validar usuario en la base de datos
    this.authService.validateUser(this.nombre, this.contrasena).subscribe(
      response => {
          //Aqui utilizamos la autorizacion para los usuarios logueados
          this.aut.iniciarSesion();
        // Si la validación es exitosa, navegar a la segunda página
          this.router.navigate(['/second-page'], { state: { username: this.nombre } });
          this.mensaje = response ? 'Inicio de sesión exitoso' : 'Usuario o la contraseña incorrectas. Intente nuevamente.';
          this.inputValidoPass = !response; 

      },
      error => {
        this.mensaje = "Nombre o contraseña incorrecta. Intente nuevamente.";
        
      });
    }
}
  // Navegación a la tercera pagina 
  gotoThirdPage() {
    this.router.navigateByUrl('/third-page', { state: { username: this.nombre } });

  }

  // Este método se ejecuta al hacer clic en el botón
  gotoregister() {
    console.log('correcto');
    this.router.navigateByUrl('/register');  
  }
}