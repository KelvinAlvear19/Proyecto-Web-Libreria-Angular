import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estadistica } from '../models/estadisticas.models';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  url = '/api/estadistica/';

  constructor(private http: HttpClient) {}

  loadEstadistica(): Observable<any>{ 
      return this.http.get(this.url); 
  }

  createEstadistica(estadistica: Estadistica){ 
      return this.http.post(this.url, estadistica); 
  }

  deleteEstadistica(id: string): Observable<any>{ 
     return this.http.delete(this.url+id);
  }
}
