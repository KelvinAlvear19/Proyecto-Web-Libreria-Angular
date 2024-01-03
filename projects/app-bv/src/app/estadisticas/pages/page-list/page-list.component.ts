import { Component, OnInit } from '@angular/core';
import { Estadistica } from '../../models/estadisticas.models';
import { EstadisticasService } from '../../services/estadisticas.service';
import { LibroPruebaService } from '../../../services/libro-prueba.service';
@Component({
  selector: 'bv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  dataEst: any[] = [];
  listFields: string[] = ['Id', 'Libro', 'Puntuacion'];
  columns: any[] = [
    //{ field: '_id', title: 'ID' },
    { field: 'libro', title: 'Libro' },
    { field: 'puntuacion', title: 'Puntuacion' },
  ];

  estadistica: Estadistica = {
    libro: '',
    puntuacion: '',
  };

  nombre: string = '';
  descripcion: string = '';

  constructor(private estadisticasService: LibroPruebaService) {}

  ngOnInit(): void {
    this.loadEstadistica();
  }

  loadEstadistica() {
    this.estadisticasService.loadEstadistica1().subscribe((data) => {
      console.log(data);
      this.dataEst = data;
    });
  }

  deleteEstadistica(rowId: string) {
    console.log('ELiminando', rowId);
    this.estadisticasService.deleteEstadistica1(rowId).subscribe(() => {
      this.loadEstadistica();
    });
  }

  onSubmit() {
    console.log('Guardando');
    console.log(this.nombre); 
    console.log(this.descripcion);
    this.estadisticasService.createEstadistica1(new Estadistica(this.nombre, this.descripcion)).subscribe(()=>{ 
      this.loadEstadistica();
    })
  }

}


