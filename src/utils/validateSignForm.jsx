
export const checkValidEmailPassword = (name,email, password) => {
    //check valid name
    const isNamevalid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    //check email validation
    const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    //check password validation
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isNamevalid) return "Enter valid name";
    
    if(!isEmailvalid) return "Enter valid email";

    if(!isPasswordValid) return "Enter valid password";

    return null;
}