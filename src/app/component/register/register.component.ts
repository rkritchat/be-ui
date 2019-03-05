import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/userService/user.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('regisAlert') regisAlert
  result: any;

  constructor(private userService:UserService,private router:Router) { }
  regisForm ={
    firstname:  '',
    lastname: '',
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
      user:  '',
      pwd:  '',
      tel: '',
      email:  '',
    }
  }

  register(){
    this.userService.register(this.regisForm)
      .then((result: any) => {
        let data = result

        if ("0000" == data.statusCode) {
          this.regisAlert.openDialog(data)
          this.router.navigate([''])
        }
        else{
          this.regisAlert.openDialog(data)
        }

      })
      .catch(err => {
        this.result = 'Failed'
        throw err
      });
     
  }
}
