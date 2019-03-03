import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Global } from '../../class/global';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private global:Global) { }
  val: any
  ngOnInit() {

  }
  task = [
    { 'desc':'Get to work','value':"25",id:1},
    { 'desc':'Pick up groceries','value':"25",id:2},
    { 'desc':'Go home','value':"25",id:3},
    { 'desc':'Fall asleep','value':"25",id:4}
  ];

  yesterday = [
   
  ];
  today = [
  
  ];
  tomorrow = [
   
  ];

  log(){
    this.global.setData(this.yesterday)
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  onTyping(evnt){
    console.log(this.yesterday)
  }
}
