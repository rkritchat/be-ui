import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  getTaskListByUser(user) {
    return this.http.post('https://us-central1-be-api-3f648.cloudfunctions.net/task/find', JSON.stringify(
      {
        user:user
      }
    )).toPromise();
  }

  addTask(task) {
    return this.http.put('https://us-central1-be-api-3f648.cloudfunctions.net/task/add', JSON.stringify(
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
