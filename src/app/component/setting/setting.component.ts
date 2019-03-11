import { Component, OnInit, ViewChild } from '@angular/core';
import { Global } from 'src/app/shared/class/global';
import Validate from 'src/app/shared/class/validate';
import { SendemailService } from 'src/app/service/sendmailService/sendemail.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  @ViewChild('emailSettingDialog') emailSettingDialog
  constructor(private global:Global,private emailService:SendemailService) { }
  edit = false
  setting ={
    cc: ["rojanaphruk.r@gmail.com", "kritchat@orcsoft.co.th"],
    email: "kritchat.r@gmail.com",
    password: "",
    to: ["rkritchat@gmail.com"]
  }
  tempSetting = {}
  sendCC;
  sendTo;

  ngOnInit() {
    this.edit = false
    this.setting = this.global.getEmailInfo()
    this.showEmail()
  }

  clickEdit(){
    this.edit = true;
    this.tempSetting = this.saveTemp(this.setting)
  }

  save(){
    this.edit = false
    this.validateEmail()
  }

  saveTemp(val){
    let temp = Object.assign({}, val)
    return temp
  }

  cancle(){
    this.setting = this.saveTemp(this.tempSetting)
    this.edit = false
  }

  validateEmail(){
    this.setting.cc = Validate.splitEmail(this.sendCC)
    this.setting.to = Validate.splitEmail(this.sendTo)
    this.saveSetting(this.setting)
  }

  showEmail(){
    this.sendCC  = Validate.showEmail(this.sendCC,this.setting.cc)
    this.sendTo  = Validate.showEmail(this.sendTo,this.setting.to)
    console.log(this.sendTo)
    console.log(this.sendCC)
  }

  saveSetting(setting){
    this.global.spinnerShow()
    this.emailService.settingEmail(setting)
      .then((result: any) => {
        let data = result

        if ("0000" == data.statusCode) {
          this.global.spinnerHide()
          this.emailSettingDialog.openDialog(data)
        }
        else{
          this.global.spinnerHide()
          this.emailSettingDialog.openDialog(data)
        }

      })
      .catch(err => {
        this.global.spinnerHide()
        throw err
      });
     
  }
}

