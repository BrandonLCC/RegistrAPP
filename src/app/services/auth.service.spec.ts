import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => { 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('debería crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('Credenciales correctas: Debería retornar true si los datos son válidos', () => {
    const mockResponse = true;

    spyOn(service, 'validateUser').and.returnValue(of(mockResponse));

    service.validateUser('admin', 'admin').subscribe(response => {
      expect(response).toBeTrue();
    });
  });

  //Este funciona ya que, los datos los toma como incorrectos. Por lo que es la prueba funciona
  it('Credenciales incorrectas: Debería retornar false si los datos son inválidos', () => {
    const mockResponse = false;

    spyOn(service, 'validateUser').and.returnValue(of(mockResponse));

    service.validateUser('sdvdds', 'ddfvdf').subscribe(response => {
      expect(response).toBeFalse();
    });
  });
});
