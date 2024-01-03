import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libros.models';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  url = '/api/libro/';

  constructor(private http: HttpClient) {}

  loadLibro(): Observable<any>{ 
      return this.http.get(this.url); 
  }

  createLibro(libro: Libro){ 
      return this.http.post(this.url, libro); 
  }

  deleteLibro(id: string): Observable<any>{ 
     return this.http.delete(this.url+id);
  }
}

