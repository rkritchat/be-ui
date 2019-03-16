import { Component, OnInit, ViewChild } from '@angular/core';
import { Global } from 'src/app/shared/class/global';
import Validate from 'src/app/shared/class/validate';
import { SendemailService } from 'src/app/service/sendmailService/sendemail.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

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
  msgError = {
    enterInput:'กรุณาระบุข้อมูล',
    emailInvalid:'อีเมล์ไม่ถูกต้อง'
  }
  error = {
    email:{
      msg:'กรุณาระบุข้อมูล',
      status:false
    },
    sendTo:{
      msg:'กรุณาระบุข้อมูล',
      status:false
    },
    sendCC:{
      msg:'กรุณาระบุข้อมูล',
      status:false
    },
    settingEmailTypeTo:{
      msg:'อีเมล์ไม่ถูกต้อง',
      status:false
    },
    settingEmailTypeCC:{
      msg:'อีเมล์ไม่ถูกต้อง',
      status:false
    },
    settingPassword:{
      msg:'กรุณาระบุข้อมูล',
      status:false
    }
  }
  ngOnInit() {
    this.edit = false
    this.setting = this.global.getEmailInfo()
    if(this.setting == null){
      this.setting = {
       cc :  [],
       email : "",
       password : "",
       to :  []
      }
    }else{
      this.showEmail()
    }
  }

  clickEdit(){
    this.edit = true;
    this.tempSetting = Object.assign({},this.setting)
  }

  save(){
    this.validateEmail()
  }

  saveTemp(val){
    let temp = Object.assign({}, val)
    return temp
  }

  validateInput(){
    let valid = false
    if(this.sendTo == ''){
      this.error.sendTo.status = true
      this.error.sendTo.msg = this.msgError.enterInput
      valid = true
    }else{
      let to = Validate.splitEmail(this.sendTo)
      to.forEach(element => {
        if(!Validate.verifyEmail(element)){
          this.error.sendTo.msg = this.msgError.emailInvalid
          this.error.sendTo.status = true
          valid = true
        }
      });
    }
    if(this.sendCC == ''){
      this.error.sendCC.status = true
      this.error.sendCC.msg = this.msgError.enterInput
      valid = true
    }
    else{
      let cc = Validate.splitEmail(this.sendCC)
      cc.forEach(element => {
        if(!Validate.verifyEmail(element)){
          this.error.sendCC.msg = this.msgError.emailInvalid
          this.error.sendCC.status = true
          valid = true
        }
      });
    }
    if(this.setting.password == ''){
      this.error.settingPassword.status = true
      this.error.settingPassword.msg = this.msgError.enterInput
      valid = true
    }
    if(this.setting.email == ''){
      this.error.email.status = true
      this.error.email.msg = this.msgError.enterInput
      valid = true
    }
    return valid 
  }

  onTypingEmail(){
    this.error.email.status = false
  }

  onTypingCC(){
    this.error.sendCC.status = false
  }


  onTypingTo(){
    this.error.sendTo.status = false
  }

  onTypingPassword(){
    this.error.settingPassword.status = false
  }

  cancle(){
    this.setting = this.saveTemp(this.tempSetting)
    this.showEmail()
    this.edit = false
    this.error.email.status = false
    this.error.sendCC.status = false
    this.error.sendTo.status = false
    this.error.settingPassword.status = false
  }

  validateEmail(){
    if(!this.validateInput()){
      this.edit = false
      this.setting.cc = Validate.splitEmail(this.sendCC)
      this.setting.to = Validate.splitEmail(this.sendTo)
      this.saveSetting(this.setting)
    }
  }

  showEmail(){
    this.sendCC  = Validate.showEmail(this.sendCC,this.setting.cc)
    this.sendTo  = Validate.showEmail(this.sendTo,this.setting.to)
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

