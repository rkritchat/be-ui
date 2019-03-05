import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  getTaskListByUser(user) {
    return this.http.post('/task/find', JSON.stringify(
      {
        user:user
      }
    )).toPromise();
  }

  addTask(task) {
    return this.http.put('/task/add', JSON.stringify(
      {
        taskId : "",
        taskLabel : task.taskLabel,
        user : task.user,
        taskDesc : task.taskDesc,
        taskProgress : task.taskProgress,
        taskStatus : ""
      }
    )).toPromise();
  }
}
