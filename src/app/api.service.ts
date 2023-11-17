// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from './types'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dev.matiivilla.cl/duoc/location';

  constructor(private http: HttpClient) {}

  getRegiones(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.apiUrl}/region`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener regiones', error);
          throw error;
        })
      );
  }

  getComunasByRegion(regionId: number): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.apiUrl}/comuna/?regionId=${regionId}`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener comunas', error);
          throw error;
        })
      );
  }
}