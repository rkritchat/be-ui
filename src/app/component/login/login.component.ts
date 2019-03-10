import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';
import { Global } from 'src/app/shared/class/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  @ViewChild('loginAlert') loginAlert;
  constructor(private route:Router,private global:Global,
    private formBuilder: FormBuilder,private userService:UserService) { }
  username
  pwd
  loginForm = new FormGroup({
    'username': new FormControl(),
    'pwd': new FormControl(),
  });
  ngOnInit() {
    localStorage.clear()
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  get f() { return this.loginForm.controls; }

  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }else{
      this.calllogin()
    }
    
  }

  calllogin(){
    this.global.spinnerShow()
    this.userService.login(this.loginForm.value.username,this.loginForm.value.pwd)
      .then((result: any) => {
        let data = result

        if ("0000" == data.statusCode) {
          localStorage.setItem('username',this.loginForm.value.username)
          this.global.setUserInfo(data.userModel)
          this.global.setEmailInfo(data.emailModel)
          this.global.spinnerHide()
          this.route.navigate(['dashboard'])
        }
        else{
          this.global.spinnerHide()
          data.statusDesc = 'Username or Password Invalid !'
          this.loginAlert.openDialog(data)
        }
        
      })
      .catch(err => {
        this.global.spinnerHide()
        throw err
      });
     
  }

}

