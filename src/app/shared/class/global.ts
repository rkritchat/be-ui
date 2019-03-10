import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';

@Injectable()
export class Global {
  
    data: any 
    sendMailparam = {}
    countTime = ["0"];
    userInfo;
    emailInfo;
    constructor(private spinner: NgxSpinnerService){
        
    }
    getData(){
        return this.data
    }

    setData(value: any){
        this.data = value
    }

    getSendMailparam(){
        return this.sendMailparam
    }

    setSendMailparam(value: any){
        this.sendMailparam = value
    }

    spinnerShow(){
        this.spinner.show();
        this.countTime.push("1");
    }

    spinnerHide(){
        this.countTime.pop();
        if (this.countTime.length == 1) {
            this.spinner.hide();
        }
    }

    setUserInfo(userModel: any): any {
        this.userInfo = userModel
    }

    getUserInfo(): any {
        return this.userInfo
    }

    setEmailInfo(emailModel: any): any {
        this.emailInfo = emailModel
    }

    getEmailInfo(): any {
        return this.emailInfo
    }
}
