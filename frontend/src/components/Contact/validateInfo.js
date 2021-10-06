export default function validateInfo(values){
    let errors={}

    if(!values.firstName.trim())
    {
        errors.firstName="first name is empty";

    }
    if(!values.lastName.trim())
    {
        errors.lastName="last name is empty";
    }
    else{
        errors.lastName='';
    }  
    if(!values.Message.trim())
    {
        errors.Message="Message is empty";
    }
    else{
        errors.Message='';
    }
    if(!values.email.trim())
    {
        errors.email="email can not be empty";  
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    {
        errors.email="email is invalid"
    }
    if(!values.phoneNumber.trim())
    {
        errors.phoneNumber="phone number is empty";
    }
    else{
        errors.phoneNumber='';
    }
   
    return errors;
}