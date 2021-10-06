import { AppBar,Toolbar,Container,IconButton,Typography, MenuList } from '@material-ui/core';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Camera from '@material-ui/icons/Camera'

import MenuIcon from '@material-ui/icons/Menu'

import './navbars.css'

const NavBars =()=>
{ 

    const [starter, setstarter] = useState(false)
    const handleEvents=()=>
    {
        setstarter(!starter)
    }
    const closeEve =()=>
    {
        setstarter(false)
    }
    return (
        <React.Fragment>
            <Container>
            <AppBar position="fixed"  style={{background:'#6CCFF6'}}>
                <Toolbar className="toolbar1">
                    <Typography variant="h6" className="classes.title">
                        <Camera/>
                        <Link className="page-title" to="/"> Memories</Link>
                    </Typography>
                    <div className="lists" >
                            <MenuList ><Link className="lin" to="/">HOME</Link></MenuList>
                            <MenuList><Link className="lin" to="/create">CREATE</Link></MenuList>
                            <MenuList><Link className="lin" to="/memories">MEMORIES</Link></MenuList>
                            <MenuList><Link className="lin contact-us-btn" to="/contact" >CONTACT  US</Link></MenuList>
                    </div>
                        <div className="menu_icon">
                        <IconButton onClick={handleEvents} edge="start" color="inherit" aria-label="menu" >
                        <MenuIcon  onClick={handleEvents}/>
                        </IconButton></div>
                </Toolbar>

                </AppBar>
                <div className="mobile-lists" style={{transform:starter? "translatex(-50px)":null,display:starter? "flex":null}}>
                        <MenuList ><Link onClick={closeEve} className="lin" ></Link></MenuList>
                        <MenuList ><Link onClick={closeEve} className="lin" to="/">HOME</Link></MenuList>
                        <MenuList><Link onClick={closeEve}  className="lin" to="/create">CREATE</Link></MenuList>
                        <MenuList><Link onClick={closeEve} className="lin" to="/memories">MEMORIES</Link></MenuList>
                        <MenuList><Link onClick={closeEve} className="lin contact-us-btn" to="/contact">CONTACT US</Link></MenuList>
               
                </div>
                <div onClick={closeEve} className="bluring"style={{transform:starter? "translatex(0)":null,display:starter? "block":null}}>

                </div>
                </Container>
       </React.Fragment>
    );

}

export default NavBars;