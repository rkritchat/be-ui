import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendemailService } from 'src/app/service/sendmailService/sendemail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  result:String = ''
  constructor(private sendmailService: SendemailService){

  }

  ngOnInit(): void {
    
  }

  sentMail() {
    this.sendmailService.sendemail()
      .then((result: any) => {
        let data = result

        if ("0000" == data.statusCode) {
          this.result = data.statusDesc
        }
        else{
          this.result = ''
        }

      })
      .catch(err => {
        this.result = 'Failed'
        throw err
      });
     
  }
}
