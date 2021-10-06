import { Container } from '@material-ui/core'
import React from 'react'
import {FormControl,Grid,InputLabel,Input,Button} from '@material-ui/core'
import useForm from './useForm';
import useStyles from './style'
import validate from './validateInfo'
import './contact.css'

function Register() {
    const classes=useStyles()
    
    const {handleChange,values,handleSubmit,errors}=useForm(validate);

     return (
      
       <div className="App">
        
         <div className='backers'>
         </div>
             <Container>
                  
                   <div className="thisbody">
                       
                              <form className="registerform"onSubmit={handleSubmit}>
                                        <Grid
                                                container
                                                direction="row"
                                                justify="center"
                                                alignItems="center"
                                                spacing={3}
                                                > 
                                                <Grid className={classes.boxs} item xs={12} lg={12} md={12} sm={12}>
                                                    <FormControl style={{ margin: '10px' }}>
                                                        <InputLabel htmlFor="fn">First Name</InputLabel>
                                                        <Input id="fn" name="firstName" value={values.firstName} onChange={handleChange} type="text"></Input>
                                                    </FormControl><br />
                                                    {errors.firstName && <p className="errorMessages">{errors.firstName}</p>}
                                                    <FormControl style={{ margin: '10px' }}>
                                                        <InputLabel htmlFor="ln">last Name</InputLabel>
                                                        <Input id="ln" name="lastName" value={values.lastName} onChange={handleChange} type="text"></Input>
                                                    </FormControl><br />
                                                    {errors.lastName && <p className="errorMessages">{errors.lastName}</p>}

                                                  
                                                   
                                                    <FormControl style={{margin:'10px'}}>
                                                        <InputLabel htmlFor="em">Email</InputLabel>
                                                        <Input id="em" name="email" 
                                                                type="email"
                                                                value={values.email}
                                                                onChange={handleChange}
                                                                ></Input>
                                                    </FormControl><br/>
                                                    {errors.email && <p className="errorMessages">{errors.email}</p>}

                                                    <FormControl style={{ margin: '10px' }}>
                                                        <InputLabel htmlFor="ln">Phone Number</InputLabel>
                                                        <Input id="ln" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} type="text"></Input>
                                                    </FormControl><br />
                                                    {errors.phoneNumber && <p className="errorMessages">{errors.phoneNumber}</p>}

                                                    <FormControl style={{ margin: '10px' }}>
                                                        <InputLabel htmlFor="ln">Message</InputLabel>
                                                        <Input className={classes.textMessage} multiline id="ln" name="Message" value={values.Message} onChange={handleChange} type="text"></Input>
                                                    </FormControl><br />
                                                    {errors.Message && <p className="errorMessages">{errors.Message}</p>}

                                                </Grid>

                                          
                                            <Grid item xs={12} lg={6} md={6} sm={6}>
                                   
                                  
                                            </Grid>
                                   </Grid>
                                   <Button className={classes.submits} type="submit"variant='outlined' color='primary' style={{margin:'10px'}}>
                                         Send
                                   </Button >
                                   
                              </form>
                   </div>
                                  
               </Container>
              
               
         </div>
   
        
     );

}
export default Register




