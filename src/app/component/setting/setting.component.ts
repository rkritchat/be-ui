import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor() { }
  edit = false
  setting ={
    email:'',
    password:'',
    sendTo:'',
    sendCC:''
  }
  ngOnInit() {
    this.edit = false
  }

  clickEdit(){
    this.edit = true;
  }

  save(){
    this.edit = false
  }

}
