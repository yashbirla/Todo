import { Component, Input, OnInit } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
   task:string="";
  itemList:any=[];
  // i:any =""; 
  // localStorage.setItem("todo_list",this.itemList);

  constructor() { }

  ngOnInit(): void {
  }
  addTask(){
    if(this.task === ""){
      alert("enter valid task")
      
    }
    else {
      // console.log(this.i);
      
      this.itemList.push(this.task)
    }
    this.task="";
  }

}
