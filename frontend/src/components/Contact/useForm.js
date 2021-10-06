
import {useState} from 'react'

const useForm =validate=>
{  
    const [values,setvalues]=useState({
        firstName:'',
        lastName:'',
        email:'',
        Message:'',
        phoneNumber:'',
    })
    const [errors,seterror]=useState({});

    const handleChange=e =>
    {
        const {name,value}=e.target
        setvalues({
            ...values,
            [name]:value
        })
        
    }
    const handleSubmit= e =>
    {
        e.preventDefault();

        seterror(validate(values));
        
    }
    return {handleChange,values,handleSubmit,errors}

}

export default useForm;