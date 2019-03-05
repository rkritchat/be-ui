import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(userInfo) {
    return this.http.post('https://us-central1-be-api-3f648.cloudfunctions.net/user/register', JSON.stringify(
      {
        firstname:  userInfo.firstname,
        lastname:  userInfo.lastname,
        user:  userInfo.user,
        pwd:  userInfo.pwd,
        tell:  userInfo.tell,
        email:  userInfo.email,
      }
    )).toPromise();
  }

}
