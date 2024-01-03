import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  dataUser:any[] = [
    {cedula:1801,nombre:'Kevin',apellido:'Alvear',fechaNacimiento:'19/04/2000',celular:'0995157811',correo:'kevin@hotmail.com'},
    {cedula:1802,nombre:'Richard',apellido:'Carrion',fechaNacimiento:'15/04/1998',celular:'0995157812',correo:'richard@hotmail.com'},
    {cedula:1803,nombre:'kevin',apellido:'Suarez',fechaNacimiento:'1/03/2000',celular:'0995157813',correo:'kevinz@hotmail.com'},
    {cedula:1804,nombre:'Eleana',apellido:'Ojeda',fechaNacimiento:'1/05/2002',celular:'0995157814',correo:'eleana@hotmail.com'},
    {cedula:1805,nombre:'Daleth',apellido:'Sevilla',fechaNacimiento:'18/05/2002',celular:'0995157815',correo:'daleth@hotmail.com'}
  ];
  listFields:string[] = ['cedula','nombre','apellido','fechaNacimiento','celular','correo'];
  constructor() { }

  ngOnInit(): void {
  }

}
