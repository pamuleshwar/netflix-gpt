
export const checkValidEmailPassword = (email, password) => {

    //check email validation
    const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    //check password validation
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isEmailvalid) return "Enter valid email";

    if(!isPasswordValid) return "Enter valid password";

    return null;
}