import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Global } from '../../class/global';
import { TaskService } from 'src/app/service/taskService/task.service';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private global:Global,private taskService:TaskService) { }
  val: any
  ngOnInit() {
    this.getTaskList() 
  }
  task = [
    // { taskDesc:'Get to work',
    //   taskProgress:"25",
    //   taskId:1
    // },
    // { taskDesc:'Pick up groceries',
    //   taskProgress:"25",
    //   taskId:2
    // },
    // { taskDesc:'Go home',
    //   taskProgress:"25",
    //   taskId:3
    // },
    // { taskDesc:'Fall asleep',
    //   taskProgress:"25",
    //   taskId:4
    // }
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
    let param ={
      today:this.today,
      lastDay:this.yesterday,
      nextDay:this.tomorrow
    }
    this.global.setSendMailparam(param)
  }

  onTyping(evnt){
    console.log(this.yesterday)
  }

  getTaskList() {
    this.global.spinnerShow()
    this.taskService.getTaskListByUser(localStorage.getItem('username'))
      .then((result: any) => {
        let data = result

        if ("0000" == data.statusCode) {
          this.task = data.taskRes
        }
        else{
          this.task = []
        }
        this.global.spinnerHide()
      })
      .catch(err => {
        this.task = []
        this.global.spinnerHide()
        throw err
      });
     
  }

  sentMail(){

  }
}
