import { Component, OnInit } from '@angular/core';
import { Reseña } from '../../models/reseñas.models';
import { ReseñasService } from '../../services/reseñas.service';
import { LibroPruebaService } from '../../../services/libro-prueba.service';
@Component({
  selector: 'bv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  dataRes: any[] = [];
  listFields: string[] = ['Id', 'Nombre', 'Reseña'];
  columns: any[] = [
    //{ field: '_id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'resenia', title: 'Reseña' },
  ];

  reseña: Reseña = {
    nombre: '',
    resenia: '',
  };

  nombre: string = '';
  descripcion: string = '';

  constructor(private reseñasService: LibroPruebaService) {}

  ngOnInit(): void {
    this.loadResenia();
  }

  loadResenia() {
    this.reseñasService.loadReseña1().subscribe((data) => {
      console.log(data);
      this.dataRes = data;
    });
  }

  deleteResenia(rowId: string) {
    console.log('ELiminando', rowId);
    this.reseñasService.deleteReseña1(rowId).subscribe(() => {
      this.loadResenia();
    });
  }

  onSubmit() {
    console.log('Guardando');
    console.log(this.nombre); 
    console.log(this.descripcion);
    this.reseñasService.createReseña1(new Reseña(this.nombre, this.descripcion)).subscribe(()=>{ 
      this.loadResenia();
    })
  }

}
