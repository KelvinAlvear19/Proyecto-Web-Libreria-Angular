import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import {ChartModule} from 'primeng/chart';
import { CoreModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    EstadisticasRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class EstadisticasModule { }
