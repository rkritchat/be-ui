import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendemailService } from 'src/app/service/sendmailService/sendemail.service';
import { Global } from 'src/app/shared/class/global';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('msgResult') msgResult;
  @ViewChild('task') task;
  result:String = ''
  constructor(private sendmailService: SendemailService,private global:Global){

  }

  ngOnInit(): void {
    
  }

  sentMail() {
    this.global.spinnerShow()
    this.sendmailService.sendemail(this.global.getSendMailparam())
      .then((result: any) => {
        let data = result

        if ("0000" == data.statusCode) {
          this.global.spinnerHide()
          this.refresh()
          this.msgResult.openDialog(data)
        }
        else{
          this.global.spinnerHide()
          this.msgResult.openDialog(data)
        }

      })
      .catch(err => {
        this.global.spinnerHide()
        throw err
      });
     
  }

  refresh(){
    this.task.initVal()
  }
}
