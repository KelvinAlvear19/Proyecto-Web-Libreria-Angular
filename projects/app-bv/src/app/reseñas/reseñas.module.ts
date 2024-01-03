import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReseñasRoutingModule } from './reseñas-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    ReseñasRoutingModule,
    SharedModule
  ]
})
export class ReseñasModule { }
