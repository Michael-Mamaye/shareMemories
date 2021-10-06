import React, {useState } from 'react';
import useStyles from './styles';
import {AppBar,Typography} from '@material-ui/core'
import {Link } from 'react-router-dom'

function Navbar() {
    const [states,setstates]=useState(false)
    const classes = useStyles();
    const handleChange1=()=>
    {
        if(window.scrollY>10){
        setstates(true)
        }
        else
        {
        setstates(false)
        }
    }
    window.addEventListener('scroll',handleChange1)
    return (
        <div>
            <AppBar  className={states? classes.appBar:classes.mainNav} position="static" color="primary">
                <Typography className={classes.heading} variant="h2" align="center">
                <Link className={classes.links} to='/'>Memories</Link></Typography>
                <div>
                    <Link className={classes.links} to='/'>Home</Link>
                    <Link className={classes.links} to='/create'>Create</Link>
                    <Link className={classes.links} to='/memories'>Memories</Link>
                    <Link className={classes.links} to='/login'>Login</Link>
                </div>
            </AppBar>
          </div>
    )
}

export default Navbar
