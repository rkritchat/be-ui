import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  result:String

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    
  }

  sendEmail(){
    this.http.get('https://us-central1-be-api-3f648.cloudfunctions.net/sendMail/send').subscribe(res=>{
      console.log(res)
      this.result = JSON.stringify(res)
    });
  }

}
