import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
interface IData{
  id:number;
  agency:string;
}

@Component({
  selector: 'bv-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataAgency:any
  @Input() columns!:any[]

  @Output() onDelete: EventEmitter<any> = new EventEmitter(); 

  objectKeys = Object.keys;
  pageActual: number=1;
  Alert:boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteRow(rowId:number): void{
    this.onDelete.emit(rowId); 
  }

}
