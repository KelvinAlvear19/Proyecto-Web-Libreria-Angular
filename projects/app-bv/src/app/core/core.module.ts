

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { RouterModule } from '@angular/router';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [
    LoginComponent,
    PageLoginComponent,
    NavbarComponent,
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ChartModule
  ],
  exports: [
    PageLoginComponent,
    LoginComponent,
    NavbarComponent
  ]
})
export class CoreModule {
}
