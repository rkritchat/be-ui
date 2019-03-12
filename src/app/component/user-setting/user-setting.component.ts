import { Component, OnInit, ViewChild } from '@angular/core';
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
  tempSetting: any;
  @ViewChild('userSettingDialog') userSettingDialog
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
  msgError = {
    enterInput:'กรุณาระบุข้อมูล',
    emailInvalid:'อีเมล์ไม่ถูกต้อง',
    pwdlengthInvalid:'กรุณากรอกรหัสผ่านอย่างน้อย',
    dataWorng:'กรอกข้อมูลไม่ถูกต้อง'
  }
  error = {
    firstname:{
      msg:'กรุณาระบุข้อมูล',
      status:false
    },
    lastname:{
      msg:'กรุณาระบุข้อมูล',
      status:false
    },
    password:{
      msg:'กรุณาระบุข้อมูล',
      status:false
    },
    email:{
      msg:'อีเมล์ไม่ถูกต้อง',
      status:false
    },
    tell:{
      msg:'อีเมล์ไม่ถูกต้อง',
      status:false
    },
    nickName:{
      msg:'กรุณาระบุข้อมูล',
      status:false
    }
  }

  ngOnInit() {
    this.edit = false
    this.setting = this.global.getUserInfo()
  }

  clickEdit(){
    this.edit = true;
    this.tempSetting = this.saveTemp(this.setting)
  }

  save(){
    if(!this.validateInput()){
      this.edit = false
      this.saveSetting()
    }
  }

  saveTemp(val){
    let temp = Object.assign({}, val)
    return temp
  }

  cancle(){
    this.setting = this.saveTemp(this.tempSetting)
    this.edit = false
    this.error.email.status = false
    this.error.firstname.status = false
    this.error.lastname.status = false
    this.error.nickName.status = false
    this.error.password.status = false
    this.error.tell.status = false
  }

  validateInput(){
    let valid = false
    if(this.setting.firstname == ''){
      this.error.firstname.status = true
      this.error.firstname.msg = this.msgError.enterInput
      valid = true
    }
    if(this.setting.lastname == ''){
      this.error.lastname.status = true
      this.error.lastname.msg = this.msgError.enterInput
      valid = true
    }
    if(this.setting.pwd == ''){
      this.error.password.status = true
      this.error.password.msg = this.msgError.enterInput
      valid = true
    }else{
      if(this.setting.pwd.length < 4){
        this.error.password.status = true
        this.error.password.msg = this.msgError.pwdlengthInvalid
        valid = true
      }
    }
    if(this.setting.tell == ''){
      this.error.tell.status = true
      this.error.tell.msg = this.msgError.enterInput
      valid = true
    }else{
      if(this.setting.tell.length < 9){
        this.error.tell.status = true
        this.error.tell.msg = this.msgError.dataWorng
        valid = true
      }
    }
    if(this.setting.nickName == ''){
      this.error.nickName.status = true
      this.error.nickName.msg = this.msgError.enterInput
      valid = true
    }
    return valid 
  }

  onTypingEmail(){
    this.error.email.status = false
  }

  onTypinTell(){
    this.error.tell.status = false
  }

  onTypingNickname(){
    this.error.nickName.status = false
  }

  onTypingFirstName(){
    this.error.firstname.status = false
  }

  onTypingLastName(){
    this.error.lastname.status = false
  }

  onTypingPassword(){
    this.error.password.status = false
  }


  saveSetting(){
    this.global.spinnerShow()
    this.userService.setting(this.setting)
      .then((result: any) => {
        let data = result

        if ("0000" == data.statusCode) {
          this.global.spinnerHide()
          this.userSettingDialog.openDialog(data)
        }
        else{
          this.global.spinnerHide()
          this.userSettingDialog.openDialog(data)
        }

      })
      .catch(err => {
        this.global.spinnerHide()
        throw err
      });
     
  }

}
