export default class Validate {

    static verifyEmail(txtEmail: string) {
        //if(txtEmail.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/)){
        //if (txtEmail.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])*$/i)) {
        if (txtEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
            return true;
        } else {
            return false;
        }
    }

    static verifyMobileNumber(txtMobile: string) {
        if (txtMobile.match(/^0([8|9|6][0-9]{8}|[2|3|4|5|7][0-9]{7})$/)) {
            return true;
        } else {
            return false;
        }
    }

    static verifyMobilePhone(txtMobile: string) {
        if (txtMobile.match(/^0[8|9|6][0-9]{8}$/)) {
            return true;
        } else {
            return false;
        }
    }

    static verifyMobileHome(txtMobile: string) {
        if (txtMobile.match(/^0[0-9]+$/)) {
            return true;
        } else {
            return false;
        }
    }
    static verifyAmount(txtAmount: string) {
        if (txtAmount.match(/^[1-9]{1}[0-9]*/)) {
            return true;
        } else {
            return false;
        }
    }

    static validateSpecialChars2(str: string) {
        // console.log(event);
        var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
        for (var i = 0; i < str.length; i++) {
            if (iChars.indexOf(str.charAt(i)) != -1) {
                return false;
            }
        }
        return true;
    }
    validateSpecialCharsForThEn(input) {
        var regex = /^([a-zA-Z]+\s)*([a-zA-Z]+)|([\u0e00-\u0e7f]+\s)*([\u0e00-\u0e7f]+)$/;
        return !regex.test(input);
    }
    static validateMSISDNM2M(mobileNo) {
        var patter = /^(999|997|940)(\\d{7})$/;
        if (mobileNo.match(patter)) {
            return true;
        } else {
            return false;
        }
    }
    static validateMobileAndFixedLineFormatPrivateM2M(mobileNo) {
        var patternMobile = /^0([8|9|6]\\d{8})$/;
        var patternFixedLine = /^0([1|2|3|4|5|7]\\d{7}|[1]\\d{8})$/;
        var patternPrivateM2M = /^(999|997|940)(\\d{7})$/;
        var invalid = false;

        if (!mobileNo.match(patternMobile) && !mobileNo.match(patternPrivateM2M) && !mobileNo.match(patternFixedLine)) {
            // alert('à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹„à¸¡à¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡ à¸à¸£à¸¸à¸“à¸²à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹à¸¥à¸°à¸£à¸°à¸šà¸¸à¸‚à¹‰à¸­à¸¡à¸¸à¸¥à¹ƒà¸«à¸¡à¹ˆà¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡');
            invalid = true;
        }
        return invalid;
    }

    static showEmail(email, emailArray) {
        email = null;
        if (emailArray != null) {
            emailArray.forEach(element => {
                if (email == null) {
                    email = element + ",";

                } else {
                    email = email + element + ",";
                }
            });
        } else {
            email = '';
        }
        email = email.substring(0,email.length-1)
        return email;
    }

    static removeDups(items) {
        var i,
            setObj = {}
        var setdata = {
            setArray: [],
            setMsgStatus: false,
            setMsgError: "",
        }
        var text = null;
        for (i = 0; i < items.length; i += 1) {
            if (!setObj.hasOwnProperty(items[i])) {
                setdata.setArray.push(items[i]);
                setObj[items[i]] = true;
            }
            else {
                setdata.setMsgStatus = true;
                setdata.setMsgError = 'utill.validate.email';
            }
        }
        return setdata;
    }

    static splitEmail(email) {
        var emailArray = email.split(",");
        for (var index = 0; index < emailArray.length; index++) {
            if (emailArray[index] == "") {
                emailArray.splice(index, 1);
                index--;
            }
        }
        return emailArray;
    }

    static checkMaxEmail(email) {
        if (email.length > 10) {
            return false;
        }
        else {
            return true;
        }
    }

    static checkMaxEmailWithLimit(email, max) {
        if (email.length > max) {
            return false;
        }
        else {
            return true;
        }
    }
    static bannedKey(evt, eng, thai, num) {
        var allowedEng = eng;
        var allowedThai = thai;
        var allowedNum = num;
        var k = evt.keyCode ? evt.keyCode : evt.which ? evt.which : evt.charCode;
        var evtobj = evt ? evt : window.event;

        /* check Alt, Ctrl key enent */
        if (evtobj.altKey || evtobj.ctrlKey) {
            return true;
        }

        /* check Shift key enent */
        // if (evtobj.shiftKey) {
        //     if (((evt.keyCode >= 35 && evt.keyCode <= 40) || evt.keyCode == 46)
        //         && (evt.charCode == 0 && evt.which == 0)) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

        if (evt.which == 0) {
            /* check function such as f5, f11, f12 */
            if (evt.keyCode == 116 || evt.keyCode == 122 || evt.keyCode == 123) {
                return true;
            }
        }

        /* check arrow key input */
        if (evt.which == 0) {
            if ((evt.keyCode >= 37 && evt.keyCode <= 40)) {
                return true;
            }
        }

        if (evt.which != 0) {
            /* check '.' */
            if (evt.charCode == 46) {
                return true;
            }
        }

        if (evt.which == 0 && evt.charCode == 0) {
            /* check other function (home, end, delete) */
            if ((evt.keyCode == 35 || evt.keyCode == 36 || evt.keyCode == 46)) {
                return true;
            }
        }

        /* check number input 0-9 */
        if (k >= 48 && k <= 57) {
            return allowedNum;
        } else if (k == 32 && allowedThai) {
            return allowedThai;
        } else if ((k >= 32 && k <= 47) || (k >= 58 && k <= 125)) {
            /* check character input a-z,A-Z, (!@#$%^&*()-_=+{}[]'";:\|/?<>.,*) */
            return allowedEng;
        } else if ((k >= 161 && k <= 255) || (k >= 3585 && k <= 3675)) {
            /* check chharacter input non-unicode and unicode */
            return allowedThai;
        } else {
            return true;
        }

        // /* à¹€à¸Šà¹‡à¸„à¸•à¸±à¸§à¹€à¸¥à¸‚ 0-9 */
        // if (k >= 48 && k <= 57) { return allowedNum; }

        // /* à¹€à¸Šà¹‡à¸„à¸„à¸µà¸¢à¹Œà¸­à¸±à¸‡à¸à¸¤à¸© a-z, A-Z */
        // if ((k >= 65 && k <= 90) || (k >= 97 && k <= 122)) { return allowedEng; }

        // /* à¹€à¸Šà¹‡à¸„à¸„à¸µà¸¢à¹Œà¹„à¸—à¸¢ à¸—à¸±à¹‰à¸‡à¹à¸šà¸š non-unicode à¹à¸¥à¸° unicode */
        // if ((k >= 161 && k <= 255) || (k >= 3585 && k <= 3675)) { return allowedThai; }
    }

    static isHoursFormat(event) {
        let str = event.key;
        if(str.match(/[0-9:.\b]/) || str.match("Backspace") || str.match("ArrowLeft") || str.match("ArrowRight") || event.ctrlKey)  return true;
        else return false;
    }

    static isNumeric(str: string) {
        let validPattern = "0123456789.";
        let hasDot = false;
        let input = str.replace(/,/gi, "");
        let result = true;
        let char;

        for (let i = 0; i < input.length && result == true; i++) {
            char = input.charAt(i);
            if (validPattern.indexOf(char) == -1) {
                result = false;
                break;
            } else {
                if (char == ".") {
                    if (hasDot == true) {
                        result = false;
                        break;
                    } else {
                        hasDot = true;
                    }
                }
            }
        }
        return result;
    }

    static backSpaceAndArrow(event){
        const key = event.keyCode;

        if(key == 37 || key == 38 || key == 39 || key == 40 || key == 8 || key == 46) { 
            // Left / Up / Right / Down Arrow, Backspace, Delete keys
            return true;
        }else{
            return false;
        }

    }

    static onTypingEng(event) {
        const pattern = /[_a-zA-Z ]/;
        let inputChar = String.fromCharCode(event.charCode);

        if (!pattern.test(inputChar) && !this.backSpaceAndArrow(event)) {
            event.preventDefault();
        }

    }

    static onTypingMoney(evt) {

        var k = evt.keyCode ? evt.keyCode : evt.which ? evt.which : evt.charCode;
        var allw = false
        if (evt.which != 0) {
            /* check '.' */
            if (evt.charCode == 46) {
                allw = true;
            }
        }
        if (k >= 48 && k <= 57 || this.backSpaceAndArrow(evt)) {
            allw = true;
        }
        return allw

    }

    static validateMoney(value) {
        if (value.match(/^[1-9]\d*(((,\d{3}){1})?(\.\w)?(\d{0,1})$)/)) {
            return true;
        } else {
            return false;
        }
    }

    static validateTime(value) {
        if (value.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)) {
            return true;
        } else {
            return false;
        }
    }

    static validate2Time(value) {
        if (value.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)) {
            return true;
        } else {
            return false;
        }
    }

    static validateContrab(value) {   
        //SUPPORTED constructions: [*] - all five commands; minutes|hours|day|months|day in week(0 & 7 is sun);
        //[number] - minutes 0...59, hours 0...23, 
        //day in month 1...31, months 1...12, day in week 0...7 (0 & 7 is sun);
        //[*/nubmer] - see construction [number]; 
        //[word] - only months (4th command) and days in week (5th command), 
        //warning this regexp is case sensitive (lower letters). NON SUPPORTED constructions: [number-number] and [number,number].

        if (value.match(/^(((([\*]{1}){1})|((\*\/){0,1}(([0-9,]{1}){1}|(([1-5]{1}){1}([0-9]{1}){1}){1}))) ((([\*]{1}){1})|((\*\/){0,1}(([0-9]{1}){1}|(([1]{1}){1}([0-9]{1}){1}){1}|([2]{1}){1}([0-3]{1}){1}))) ((([\*]{1}){1})|((\*\/){0,1}(([1-9]{1}){1}|(([1-2]{1}){1}([0-9]{1}){1}){1}|([3]{1}){1}([0-1]{1}){1}))) ((([\*]{1}){1})|((\*\/){0,1}(([1-9]{1}){1}|(([1-2]{1}){1}([0-9]{1}){1}){1}|([3]{1}){1}([0-1]{1}){1}))|(jan|feb|mar|apr|may|jun|jul|aug|sep|okt|nov|dec)) ((([\*]{1}){1})|((\*\/){0,1}(([0-7]{1}){1}))|(sun|mon|tue|wed|thu|fri|sat)))$/)) {
            return true;
        } else {
            return false;
        }
    }

    static validateGroupTime(type,value){
        if(type=='TIME'){
            return this.validateTime(value)
        }
        else if(type=='2TIME'){
            return this.validate2Time(value) 
        }
        else if(type=='NUMBER'){
            return this.validateMoney(value)    
        }
        else if(type=='CRONTAB'){
            return this.validateContrab(value)    
        }
        else{
            return true;
        }
        
    }

    static ontypingGroupCheck(evt,type){
       
        var k = evt.keyCode ? evt.keyCode : evt.which ? evt.which : evt.charCode;
        var allw = false
        // console.log(k,type,evt)
        if(type==null || type=='CRONTAB'){
            allw = true;
        }
        else{
            if(type=='TIME' ||type=='2TIME'){
            
                if(type=='2TIME'){
                    /* check '-' */
                    if (k == 189|| k == 45) {
                        allw = true;
                    }
                }
                /* check ':' */
                if (k == 186 || k == 58) {
                    allw = true;
                }
                
                
            }
            if(type=='NUMBER'){
                if (evt.which != 0) {
                    /* check '.' */
                    if (k == 46) {
                        allw = true;
                    }
                }
            }
           
            if (k >= 48 && k <= 57 || k >= 37 && k <= 40 ||  k == 8 ) {
                allw = true;
            }  
        } 
       
        return allw
    }
    
    static enCode(uri){
        return btoa(uri);
    }

    static deCode(uri){
        return atob(uri);
    }

    static isHaveDetail(detailId){
        if(detailId==null||detailId==''||detailId==undefined||detailId=="null"){
            return false;
        }else{
            return true;
        }
    }

    static idCardNumber(idnumber : string) {
        let valid = false;
        if (this.checkLengthString(idnumber, 13)) {
            let sum = 0;
            for (var i = 0; i < idnumber.length - 1; i++) {
                sum = sum + ((13 - i) * +idnumber.charAt(i));
            }
            if ((11 - (sum % 11)) % 10 == +idnumber.charAt(12)) {
                valid = true;
            } 
        }
        return valid;
    }

    static checkLengthString(str : string, no : number) {
        if (no == str.length) {
            return true;
        } else {
            return false;
        }
    }

    static chThai(evt) {
        var thai = new RegExp(/^[ก-๙]+[ ]{0,1}[ก-๙]{1}[ ]{0,1}[ก-๙]+$/g);
        if (evt.match(thai)) {
            return true;
        } else {
            return false;
        }
    
    }
}