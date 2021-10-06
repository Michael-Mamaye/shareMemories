import { Container,Typography,Grid,Card,CardMedia } from '@material-ui/core'
import React from 'react'
import useStyles from './style'
import sunrise from '../../images/sunrise.jpg'
import Cup from '../../images/cup.jpg'
import Travlers from '../../images/travlers.jpg'
import Mainpic from '../../images/friends.jpg'



function Home() {
    const classes=useStyles();
    

    return (
        <div>
            <Container style={{paddingTop:'150px',paddingBottom:'170px'}}>
               <Grid container spacing={1}>
                   <Grid item xs={12} md={6} padding='10px' >
                         <Card className={classes.card}>
                             <CardMedia className={classes.media} image={sunrise}>
                                  
                             </CardMedia>
                         </Card>
                   </Grid>
                   <Grid item xs={12} md={6} >
                            <Typography className={classes.title1}>Share Your Memories</Typography>
                            <Typography className={classes.par1}>
                                Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                corrupti odit alias consequatur aliquid nesciunt ad,consequatur aliquid nesciunt ad,
                                repudiandae a ipsum qui assumenda. Repellendus quis distinctio itaque exercitationem
                            </Typography>
                   </Grid>
               </Grid>
            </Container>
            <div style={{margin:'-8px',overflowX:'hidden',paddingLeft:'30px',paddingTop:'100px',backgroundColor:'rgb(108, 207, 246,0.8)',paddingBottom:'100px'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} padding='10px' >
                             <Typography className={classes.titlebig}>What Are Your Memories</Typography>
                        </Grid>
                        <Grid container style={{paddingTop:'100px'}} xs={12} sm={12} spacing={5}>
                                    <Grid item lg={4}xs={6}>
                                        <Typography className={classes.title}>Historical Memories</Typography>
                                        <Typography className={classes.par}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4}xs={6}>
                                        <Typography className={classes.title}>Vacation Memories</Typography>
                                        <Typography className={classes.par}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4}xs={6}>
                                        <Typography className={classes.title}>Childhood Memories</Typography>
                                        <Typography className={classes.par}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4}xs={6}>
                                        <Typography className={classes.title}>Place Memories</Typography>
                                        <Typography className={classes.par}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4}xs={6}>
                                        <Typography className={classes.title}>Childhood Memories</Typography>
                                        <Typography className={classes.par}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4}xs={6}>
                                        <Typography className={classes.title}>Vacation Memories</Typography>
                                        <Typography className={classes.par}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    
                        </Grid>
                    </Grid>
            </div>

        <div style={{paddingTop:'100px'}}>
            <Container>
                <Typography className={classes.gallerytitle}>
                    GALLERY
                </Typography>
                
                    <Grid container className={classes.gallerypics} spacing={2}>

                        <Grid item lg={4} md={6} xs={12}>
                            <img alt='' className={classes.Gimage} src={Cup} ></img>
                        </Grid>
                        <Grid item lg={4} md={6} xs={12}>
                            <img alt='' className={classes.Gimage} src={Mainpic} ></img>
                        </Grid>
                        <Grid item lg={4} md={6} xs={12}>

                            <img alt='' className={classes.Gimage} src={Travlers}></img>
                        </Grid>

                    </Grid>
            </Container>
            </div>    
        </div>
    )
}

export default Home
