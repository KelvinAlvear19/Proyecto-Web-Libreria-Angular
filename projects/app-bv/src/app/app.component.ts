import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'bv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appBV';
  expanded = true
  constructor( private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
