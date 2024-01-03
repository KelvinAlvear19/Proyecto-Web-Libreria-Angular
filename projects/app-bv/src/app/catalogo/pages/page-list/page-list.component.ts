import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../../models/catalogo.models';
import { CatalogoService } from '../../services/catalogo.service';
import { LibroPruebaService } from '../../../services/libro-prueba.service';

@Component({
  selector: 'bv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  dataCatalogo: any[] = [];
  listFields: string[] = ['Id', 'Categoria', 'Descripcion'];
  columns: any[] = [
    //{ field: '_id', title: 'ID' },
    { field: 'categoria', title: 'Categoria' },
    { field: 'descripcion', title: 'Descripcion' },
  ];

  catalogo: Catalogo = {
    categoria: '',
    descripcion: '',
  };

  categoria: string = '';
  descripcion: string = '';

  constructor(private catalogoService: LibroPruebaService) {}

  ngOnInit(): void {
    this.loadCatalogo();
  }

  loadCatalogo() {
    this.catalogoService.loadCatalogo1().subscribe((data) => {
      console.log(data);
      this.dataCatalogo = data;
    });
  }

  deleteCategoria(rowId: string) {
    console.log('ELiminando', rowId);
    this.catalogoService.deleteCatalogo1(rowId).subscribe(() => {
      this.loadCatalogo();
    });
  }

  onSubmit() {
    console.log('Guardando');
    console.log(this.categoria); 
    console.log(this.descripcion);
    this.catalogoService.createCatalogo1(new Catalogo(this.categoria, this.descripcion)).subscribe(()=>{ 
      this.loadCatalogo();
    })
  }
}
