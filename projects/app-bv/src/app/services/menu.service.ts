import { Injectable } from '@angular/core';
export interface IMenu {
  tittle: string,
  url: string,
  icon:string
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {
private listMenu:IMenu[]=[
  {tittle:'Catalogo',url:'/catalogo',icon:'./assets/img/catalogue.png'},
  {tittle:'Libros',url:'/libros',icon:'./assets/img/book-stack.png'},
  {tittle:'Reseñas',url:'/reseñas',icon:'./assets/img/rating.png'},
  {tittle:'Estadisticas',url:'/estadisticas',icon:'./assets/img/results.png'},
  {tittle:'Usuarios',url:'/usuarios',icon:'./assets/img/man.png'}
]
constructor() { }
getMenu():IMenu[]{
  return[...this.listMenu]
}

getMenuByUrl(url:string):IMenu{
  return this.listMenu.find(
    (menu)=>menu.url.toLowerCase()===url.toLowerCase()
  ) as IMenu
}
}
