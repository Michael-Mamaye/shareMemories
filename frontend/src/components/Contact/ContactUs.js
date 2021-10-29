
import React from 'react'
import { StyledButton,StyledContainerDiv, StyledDiv,StyledTitle,StyledInput,StyledTextArea } from './styles';
function Register() {
 
     return (
      
       <div>
                   <StyledContainerDiv>
                       <StyledDiv>
                           <StyledTitle>Contact Us</StyledTitle>
                       </StyledDiv>
                       <StyledDiv>
                            <form>
                                        
                                    <StyledInput  name="fullName" placeholder='Full Name' type="text"/><br/>
                                    <StyledInput  name="email" placeholder='Email' type="email"/><br/>
                                    <StyledTextArea  name="message" placeholder='Message' type="text"></StyledTextArea><br/>
                                    
                                    <StyledButton  type="submit"variant='outlined' color='primary' style={{margin:'10px'}}>
                                            Send
                                    </StyledButton >
                                    
                                </form>
                       </StyledDiv>
                        
                   </StyledContainerDiv>
               
              
               
         </div>
   
        
     );

}
export default Register




