import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(userInfo) {
    return this.http.post('/user/register', JSON.stringify(
      {
        firstname:  userInfo.firstname,
        lastname:  userInfo.lastname,
        user:  userInfo.user,
        pwd:  userInfo.pwd,
        tell:  userInfo.tel,
        email:  userInfo.email,
        nickName:userInfo.nickname
      }
    )).toPromise();
  }

  login(usr,pwd) {
    return this.http.post('/user/login', JSON.stringify(
      {
        user:  usr,
        pwd:  pwd,
      }
    )).toPromise();
  }

  setting(user) {
    return this.http.patch('/user/init', JSON.stringify(
      {
        firstname:user.firstname,
        lastname:user.lastname,
        user:user.user,
        pwd:user.pwd,
        email:user.email,
        tell:user.tell,
        nickName:user.nickName
      }
    )).toPromise();
  }

}
