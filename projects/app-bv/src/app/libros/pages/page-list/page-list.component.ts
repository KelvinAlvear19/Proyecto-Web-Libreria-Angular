import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libros.models';
import { LibrosService } from '../../services/libros.service';
import { LibroPruebaService } from '../../../services/libro-prueba.service';

@Component({
  selector: 'bv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  dataLibros: any[] = [];
  listFields: string[] = ['Id', 'Nombre', 'Descripcion'];
  columns: any[] = [
    //{ field: '_id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'descripcion', title: 'Descripcion' },
  ];

  libro: Libro = {
    nombre: '',
    descripcion: '',
  };

  nombre: string = '';
  descripcion: string = '';

  constructor(private librosService: LibroPruebaService) {}

  ngOnInit(): void {
    this.loadLibro();
  }

  loadLibro() {
    this.librosService.loadLibro1().subscribe((data) => {
      console.log(data);
      this.dataLibros = data;
    });
  }

  deleteLibro(rowId: string) {
    console.log('ELiminando', rowId);
    this.librosService.deleteLibro1(rowId).subscribe(() => {
      this.loadLibro();
    });
  }

  onSubmit() {
    console.log('Guardando');
    console.log(this.nombre); 
    console.log(this.descripcion);
    this.librosService.createLibro1(new Libro(this.nombre, this.descripcion)).subscribe(()=>{ 
      this.loadLibro();
    })
  }

}
