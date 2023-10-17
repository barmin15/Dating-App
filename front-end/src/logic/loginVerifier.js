
import validator from 'validator'

export const passwordChecker = (password) => {
    if(passwordTik(password)){
        return true;
    }
    alert("Password must be at least 8 characters long, and must contain a capital letter")
    return true;
}

export const emailChecker = (email) => {
   if(emailTik(email)){
    return true;
   }
    alert("Invalid email adress!");
    return false;
}

export const nameChecker = (name) => {
    if(nameTik(name)){
        return true;
    }
    alert("Name can't contain numbers, and has to be at least 3 characters long")
    return false;
}

export const passwordTik = (password) => {
    if (password.length < 8) {
        return false;
    }
    if (password.split('').filter(elem => elem.toLowerCase() === elem).length === password.length) {
        return false;
    }
    return true;
}

export const emailTik = (email) => {
    if (validator.isEmail(email)) {
        return true;
    }
        return false;
}

export const nameTik = (name) => {
    if(name.length >= 3 && name.split("").filter(e => !isNaN(e)).length === 0 && name !== null){
        return true;
    }
    return false;
}
