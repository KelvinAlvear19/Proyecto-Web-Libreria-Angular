import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu, MenuService } from '../../../services/menu.service';

@Component({
  selector: 'bv-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.css']
})
export class TittleComponent implements OnInit {
  path:IMenu
  pageActual: number=1;
  constructor(
    private menuService:MenuService,
    private activateRoute:ActivatedRoute
  )
  {
    const currentPath = '/'+this.activateRoute.snapshot.pathFromRoot[1].routeConfig?.path
    this.path = this.menuService.getMenuByUrl(currentPath)
   }


  ngOnInit(): void {
  }

}
