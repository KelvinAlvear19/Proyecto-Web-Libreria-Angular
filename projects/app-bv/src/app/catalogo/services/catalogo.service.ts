import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Catalogo} from '../models/catalogo.models';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  url = '/api/catalogo/';

  constructor(private http: HttpClient) {}

  loadCatalogo(): Observable<any>{ 
      return this.http.get(this.url); 
  }

  createCatalogo(catalogo: Catalogo){ 
      return this.http.post(this.url, catalogo); 
  }

  deleteCatalogo(id: string): Observable<any>{ 
     return this.http.delete(this.url+id);
  }
}
