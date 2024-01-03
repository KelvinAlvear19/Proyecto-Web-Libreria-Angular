import { Component, OnInit } from '@angular/core';
import { IMenu, MenuService } from '../../../services/menu.service';

@Component({
  selector: 'bv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;  
}
  listMenu:IMenu[]
  expanded=true
  constructor(private menuService:MenuService) {
    this.listMenu= menuService.getMenu()
   }

  ngOnInit(): void {
  }

}
