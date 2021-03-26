const User = require("../model/user.model");


const nameValidator = async (name = "") => {
    const phrase = new RegExp(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/);
    const validating = phrase.test(name);
    if(!validating){
        throw new Error("Invalid name");
    }
}
const userNameValidator = async (userName = "") => {
    const phrase = new RegExp(/\s/);
    const validating = phrase.test(userName.trim());
    if(validating){
        throw new Error("Invalid username: Blanks are not accepted");
    }
    const user = await User.findOne( { userName } );
    if(user){
        throw new Error("UserName already exists");
    }
}
const passwordValidator = async (password = "") => {
    const phrase = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{5,}/);
    const validating = phrase.test(password);
    if(!validating){
        throw new Error("Invalid password");
    }
}
const emailValidator = async (email = "") => {
    const phrase = new RegExp(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[c-o-m]{3,}))$/);
    const validating = phrase.test(email);
    if(!validating){
        throw new Error("Invalid email");
    } 
    const user = await User.findOne( { email } );
    if(user){
        throw new Error("Email already exists");
    }
}
const userLoginValidator = async (userName = "") =>{
    const user = await User.findOne( { userName } );
    if(userName === ""){
        return
    }
    if(!user){
        throw new Error("The username or password is incorrect");
    }
}
const emailLoginValidator = async (email = "") =>{
    const user = await User.findOne( { email } );
    if(email === ""){
        return
    }
    if(!user){
        throw new Error("The username or password is incorrect");
    }
}
module.exports = {
    userNameValidator,
    passwordValidator,
    nameValidator,
    emailValidator,
    userLoginValidator,
    emailLoginValidator
}