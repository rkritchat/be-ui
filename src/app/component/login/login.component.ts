import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;

  constructor(private route:Router,private formBuilder: FormBuilder) { }
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
      localStorage.setItem('username',this.loginForm.value.username)
      this.route.navigate(['dashboard'])
    }
    
  }

}

