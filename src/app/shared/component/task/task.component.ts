import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Global } from '../../class/global';
import { TaskService } from 'src/app/service/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private global:Global,private taskService:TaskService) { }
  val: any
  ngOnInit() {

  }
  task = [
    { taskDesc:'Get to work',
      taskProgress:"25",
      taskId:1
    },
    { taskDesc:'Pick up groceries',
      taskProgress:"25",
      taskId:2
    },
    { taskDesc:'Go home',
      taskProgress:"25",
      taskId:3
    },
    { taskDesc:'Fall asleep',
      taskProgress:"25",
      taskId:4
    }
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

  getTaskList() {
    this.taskService.getTaskListByUser("kritchat")
      .then((result: any) => {
        let data = result

        if ("0000" == data.statusCode) {
          this.task = data.taskRes
        }
        else{
          this.task = []
        }

      })
      .catch(err => {
        this.task = []
        throw err
      });
     
  }
}
