import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient){

  }

  result:string
  sendEmail(){
    this.http.get('https://us-central1-be-api-3f648.cloudfunctions.net/sendMail/send').subscribe(res=>{
      console.log(res)
      this.result = JSON.stringify(res)
    });
  }
}
