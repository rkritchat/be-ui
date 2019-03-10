import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/userService/user.service';
import { RouteReuseStrategy, Router } from '@angular/router';
import { Global } from 'src/app/shared/class/global';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('regisAlert') regisAlert
  result: any;

  constructor(private userService:UserService,private router:Router,private global:Global) { }
  regisForm ={
    firstname:  '',
    lastname: '',
    nickname: '',
    user:  '',
    pwd:  '',
    tel: '',
    email:  '',
  }
  ngOnInit() {
    this.clear()
  }

  clear(){
    this.regisForm ={
      firstname:  '',
      lastname: '',
      nickname: '',
      user:  '',
      pwd:  '',
      tel: '',
      email:  '',
    }
  }

  register(){
    this.global.spinnerShow()
    this.userService.register(this.regisForm)
      .then((result: any) => {
        let data = result

        if ("0000" == data.statusCode) {
          this.global.spinnerHide()
          this.regisAlert.openDialog(data)
          this.router.navigate([''])
        }
        else{
          this.global.spinnerHide()
          this.regisAlert.openDialog(data)
        }

      })
      .catch(err => {
        this.global.spinnerHide()
        throw err
      });
     
  }
}
