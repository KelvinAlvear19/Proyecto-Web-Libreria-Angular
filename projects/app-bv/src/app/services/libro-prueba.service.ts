import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../libros/models/libros.models';
import { Estadistica } from '../estadisticas/models/estadisticas.models';
import { Catalogo } from '../catalogo/models/catalogo.models';
import { Reseña } from '../reseñas/models/reseñas.models';

@Injectable({
  providedIn: 'root'
})
export class LibroPruebaService {
api='http://localhost:9000/api/libro';
apies='http://localhost:9000/api/estadistica';
apica='http://localhost:9000/api/catalogo';
apire='http://localhost:9000/api/resenia';

  constructor(private http: HttpClient) { }
  loadLibro1(): Observable<any>{ 
    return this.http.get(this.api); 
}
createLibro1(libro: Libro){ 
  return this.http.post(this.api, libro); 
}

deleteLibro1(id: string): Observable<any>{ 
 return this.http.delete(this.api+id);
}
loadEstadistica1(): Observable<any>{ 
  return this.http.get(this.apies); 
}

createEstadistica1(estadistica: Estadistica){ 
  return this.http.post(this.apies, estadistica); 
}

deleteEstadistica1(id: string): Observable<any>{ 
 return this.http.delete(this.apies+id);
}

loadCatalogo1(): Observable<any>{ 
  return this.http.get(this.apica); 
}

createCatalogo1(catalogo: Catalogo){ 
  return this.http.post(this.apica, catalogo); 
}

deleteCatalogo1(id: string): Observable<any>{ 
 return this.http.delete(this.apica+id);
}
loadReseña1(): Observable<any>{ 
  return this.http.get(this.apire); 
}

createReseña1(reseña: Reseña){ 
  return this.http.post(this.apire, reseña); 
}

deleteReseña1(id: string): Observable<any>{ 
 return this.http.delete(this.apire+id);
}
}
