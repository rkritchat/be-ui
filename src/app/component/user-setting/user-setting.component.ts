import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/shared/class/global';
import { SendemailService } from 'src/app/service/sendmailService/sendemail.service';
import Validate from 'src/app/shared/class/validate';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {

  constructor(private global:Global,private userService:UserService) { }
  edit = false
  setting ={
    firstname:'',
    lastname:'',
    user:'',
    pwd:'',
    email:'',
    tell:'',
    nickName:''
  }
  sendCC;
  sendTo;

  ngOnInit() {
    this.edit = false
    this.setting = this.global.getUserInfo()
  }

  clickEdit(){
    this.edit = true;
  }

  save(){
    this.edit = false
    this.saveSetting()
  }

  saveSetting(){
    this.global.spinnerShow()
    this.userService.setting(this.setting)
      .then((result: any) => {
        let data = result

        if ("0000" == data.statusCode) {
          this.global.spinnerHide()
        }
        else{
          this.global.spinnerHide()
        }

      })
      .catch(err => {
        this.global.spinnerHide()
        throw err
      });
     
  }

}