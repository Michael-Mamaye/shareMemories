import React from 'react'
import {Container, Grid,Typography} from '@material-ui/core'
import useStyles from './style'
import {Link} from 'react-router-dom'

import {Mail,Phone,Facebook,Instagram,Telegram} from '@material-ui/icons'
const Footer=()=> {
    const classes=useStyles()
    return (
        <div style={{color:'rgb(101,101,101)',backgroundColor:'rgba(0, 16, 17,0.9)',margin:'-8px',marginTop:'100px',overflowX:'hidden',paddingLeft:'30px',paddingBottom:'80px'}}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid className={classes.footers} container xs={12} sm={12} spacing={5}>
                                    <Grid item lg={4} md={6} sm={6} xs={12}>
                                       <Typography className={classes.headers}>Contact Us</Typography>
                                       <div className={classes.contactdiv}>
                                           <Link className={classes.header2}><Phone/> phone</Link><br/>
                                           <Link className={classes.contact}> 09**32**30</Link><br/>
                                           <Link className={classes.contact}> 09**32**44</Link><br/>
                                           <Link className={classes.header2}><Mail/> Gmail</Link><br/>
                                           <Link className={classes.contact}> kevinasdf@gmail.com</Link><br/>
                                           <Link className={classes.contact}> afadsf@gmail.com</Link><br/>
                                           
                                       </div>
                                    </Grid>
                                    <Grid item lg={4} md={6} sm={6} xs={12}>
                                            <Typography className={classes.headers}>Follow Us</Typography>
                                            <div className={classes.contactdiv}>
                                                <Link className={classes.header2}><Telegram/> t.me/amharic_oldies</Link><br/>
                                                <Link className={classes.header2}><Facebook/> facebook.com/mikilaasdf</Link><br/>
                                                <Link className={classes.header2}><Instagram/> instagram.com/mikila</Link><br/>
                                               
                                                    {/* <p> <Mail/>  <Phone/> aksdfhkljhk</p> */}
                                            </div>
                                    </Grid>
                                    <Grid item lg={4} md={6} sm={6} xs={12}>
                                            <Typography className={classes.headers}>Quick Links</Typography>
                                            <div className={classes.contactdiv}>
                                                <Link to='/home' className={classes.contact}> Home</Link><br/>
                                                <Link to='/create' className={classes.contact}> create Meories</Link><br/>
                                                <Link to='/memories' className={classes.contact}> Memories</Link><br/>
                                                   
                                            </div>
                                    </Grid>  
                        </Grid>
                    </Grid>
                    </Container>
            </div>
            
    )
}

export default Footer
