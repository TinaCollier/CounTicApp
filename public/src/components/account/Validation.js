export const validateEmail = email => {
    const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ( email.match( validEmailRegex ) ) {
        return true;
    } else {
        return false;
    }
}

export const validateUsername = name => {
    return name.length > 5;
}

export const validatePassword = password => {
    // password must contain at least one uppercase, one lowercase, one digit, one special symbol, and be more than 7 characters //
    return  /[A-Z]/       .test(password) &&
            /[a-z]/       .test(password) &&
            /[0-9]/       .test(password) &&
            /[^A-Za-z0-9]/.test(password) &&
            password.length > 7;
}

export const confirmPasswords = ( password1, password2 ) => {
    return password1 === password2
}