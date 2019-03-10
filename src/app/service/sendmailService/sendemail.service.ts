import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendemailService {

  constructor(private http:HttpClient) { }

  sendemail(value){
    return this.http.post('/email/send', JSON.stringify(
      {
        user:  localStorage.getItem('username'),
        today:value.today,
        lastDay:value.lastDay,
        nextDay:value.nextDay
      }
    )).toPromise();
  }

  settingEmail(setting){
    return this.http.patch('/email/init', JSON.stringify(
      {
        user:  localStorage.getItem('username'),
        emailModel:{
          email:setting.email,
          password:setting.password,
          to:setting.to, //array
          cc:setting.cc, //array
        }
      }
    )).toPromise();
  }
}
