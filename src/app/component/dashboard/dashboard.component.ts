import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendemailService } from 'src/app/service/sendmailService/sendemail.service';
import { Global } from 'src/app/shared/class/global';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  result:String = ''
  constructor(private sendmailService: SendemailService,private global:Global){

  }

  ngOnInit(): void {
    
  }

  sentMail() {
    this.sendmailService.sendemail(this.global.getSendMailparam())
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
