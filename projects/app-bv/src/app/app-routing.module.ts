import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { PageHomeComponent } from './core/pages/page-home/page-home.component';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
{path:"",component:PageLoginComponent},
{path:"home",component:PageHomeComponent},
{path:"catalogo",loadChildren:()=>import('./catalogo/catalogo.module').then((m)=>m.CatalogoModule)},
{path:"estadisticas",loadChildren:()=>import('./estadisticas/estadisticas.module').then((m)=>m.EstadisticasModule)},
{path:"libros",loadChildren:()=>import('./libros/libros.module').then((m)=>m.LibrosModule)},
{path:"reseñas",loadChildren:()=>import('./reseñas/reseñas.module').then((m)=>m.ReseñasModule)},
{path:"usuarios",loadChildren:()=>import('./usuarios/usuarios.module').then((m)=>m.UsuariosModule)},
{path:"form",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
