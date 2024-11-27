import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstPagePage } from './first-page.page';
import { AuthService } from '../services/auth.service';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('FirstPagePage', () => {
  let component: FirstPagePage;
  let fixture: ComponentFixture<FirstPagePage>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstPagePage],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule,
        HttpClientTestingModule 
      ],
      providers: [AuthService]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstPagePage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('Deberia cargar la pagina: First-page o Ingreso al sistema', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia mostrar "Inicio de sesión exitoso" si los datos son válidos', () => {
    spyOn(authService, 'validateUser').and.returnValue(of(true));
    component.gotoSecondPage();
    expect(component.mensaje).toBe('Inicio de sesión exitoso');
  });

 /* it('Deberia mostrar "Usuario o contraseña incorrectas" para las credenciales invalidas', () => {
    spyOn(authService, 'validateUser').and.returnValue(of(false));
    component.gotoSecondPage();
    expect(component.mensaje).toBe('Usuario o contraseña incorrectas');
  });*/
});
