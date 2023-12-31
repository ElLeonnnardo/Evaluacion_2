import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../types';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosRegionalesService {

  private apiUrl = 'https://dev.matiivilla.cl/duoc/location';

  constructor(private http: HttpClient) {}

  obtenerRegiones(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.apiUrl}/region`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener regiones', error);
          throw error;
        }));
      }
    }



@Injectable({
  providedIn: 'root'
})
export class DatosComunalesService {

  private apiUrl = 'https://dev.matiivilla.cl/duoc/location';

  constructor(private http: HttpClient) {}

  obtenerComunas(regionId: number): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.apiUrl}/comuna/7`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener comunas', error);
          throw error;
        })
      );
  }
}