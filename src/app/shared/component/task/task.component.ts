import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Global } from '../../class/global';
import { TaskService } from 'src/app/service/taskService/task.service';
import { TouchSequence } from 'selenium-webdriver';
import * as moment from 'moment';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private global:Global,private taskService:TaskService) { }
  val: any
  ngOnInit() {
    this.initVal()
  }

  initVal(){
    this.task = []
    this.yesterday = []
    this.today = []
    this.tomorrow = []
    this.getTaskList() 
  }
  task = [

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

  copyTask(task){
    let newTask = Object.assign({},task)
    newTask.taskProgress= 0
    newTask.taskId = null
    this.task.push(newTask)
  }

  saveTask(){
    let param ={
      today:this.today,
      lastDay:this.yesterday,
      nextDay:this.tomorrow
    }
    this.global.setSendMailparam(param)
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
   this.saveTask()
  }

  onTyping(evnt){
    console.log(this.yesterday)
  }

  getTaskList() {
    this.global.spinnerShow()
    this.taskService.getTaskListByUser(localStorage.getItem('username'))
      .then((result: any) => {
        let data = result
        let todate = new Date().getDate()
        let tomonth = new Date().getMonth()
        console.log(todate)
        if ("0000" == data.statusCode) {
          data.taskRes.forEach(element => {
            let updateDate = moment(new Date(element.updateDate)).format("DD/MM/YYYY")
            let updateD = new Date(updateDate).getDate()
            let updateM = new Date(updateDate).getMonth()
            let diffDay = todate - updateD
            let diffMonth = tomonth - updateM
            console.log(diffDay)
            console.log(diffMonth)
            console.log(element.taskProgress)
            if((diffDay == 1 || diffDay == 0) && diffMonth==0 && element.taskProgress>0 ){
              this.yesterday.push(element)
            }
            else{
              this.task.push(element)
            }       
          });
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
