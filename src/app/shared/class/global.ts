export class Global {
    data: any 
    sendMailparam = {}

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
}
