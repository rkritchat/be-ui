import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from 'src/app/service/taskService/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @ViewChild('dialog') dialog;

  constructor(private taskService: TaskService) { }
  task = {
    taskLabel: "",
    user: "tichaws",
    taskDesc: "",
    taskProgress: "",
  }
  ngOnInit() {
    this.clear()
  }

  addTask() {
    this.taskService.addTask(this.task)
      .then((result: any) => {
        let data = result
        if ("0000" == data.statusCode) {
          this.clear()
          this.dialog.openDialog(data)
        }
        else {

        }

      })
      .catch(err => {
        throw err
      });

  }


  clear() {
    this.task = {
      taskLabel : "",
      user : localStorage.getItem('username'),
      taskDesc : "",
      taskProgress : "",
    }
  }
}

