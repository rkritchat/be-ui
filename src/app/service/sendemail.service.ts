import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendemailService {

  constructor(private http:HttpClient) { }

  sendemail(){
    return this.http.get('https://us-central1-be-api-3f648.cloudfunctions.net/sendMail/send').toPromise();
  }
}
