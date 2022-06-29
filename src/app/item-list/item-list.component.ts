import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
 @Input() task:string="";
 @Input() i:any;
 date: Date = new Date();

 isClicked = false;
  constructor() {
    console.log(this.i);
    this.i=" "

   }


  editItem(event:Event) {
     
  }


  deleteItem(event:Event){
    
  }
  ngOnInit(): void {
  }
  
  
}
