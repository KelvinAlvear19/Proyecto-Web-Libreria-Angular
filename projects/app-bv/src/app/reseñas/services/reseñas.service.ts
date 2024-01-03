import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reseña } from '../models/reseñas.models';

@Injectable({
  providedIn: 'root',
})
export class ReseñasService {
  url = '/api/resenia/';

  constructor(private http: HttpClient) {}

  loadReseña(): Observable<any>{ 
      return this.http.get(this.url); 
  }

  createReseña(reseña: Reseña){ 
      return this.http.post(this.url, reseña); 
  }

  deleteReseña(id: string): Observable<any>{ 
     return this.http.delete(this.url+id);
  }
}
