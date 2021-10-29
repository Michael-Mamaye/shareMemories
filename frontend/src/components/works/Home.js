import { Container,Typography,Grid,Card,CardMedia } from '@material-ui/core'
import React from 'react'
import useStyles from './style'
import sunrise from '../../images/sunrise.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import { useSelector } from 'react-redux'
import Galleries from './gallery/Galleries'

function Home() {
    const classes=useStyles();
    const posts=useSelector((state)=>state.posts)
    
    return (
        <div>
            <div style={{paddingTop:'150px',width:'100%',height:'80vh',background:'#00203FFF',paddingBottom:'170px'}}>
              <Container>
                    <Grid container className={classes.thisGrid}>
                        <Grid item lg={4} md={4} xs={12} className={classes.thisGrid}>
                            <Typography className={`mainHomeTitle  ${classes.mainHomeTitle}`}>What Memory Do You Have To Share?</Typography>
                        </Grid>
                        <Grid item lg={8} md={8} xs={12} className={classes.thisGrid}>
                            <Container>
                            <Carousel style={{display:'flex',flexDirection:'row',padding:'10px',margin:'0px'}} >
                               {posts.map((post) => (
                                   <div>
                                       <img src={post.selectedFile} alt='miki'/>
                                       <p style={{color:'white',marginBottom:'10px'}}>{post.title}</p>
                                   </div>
                                ))}     
                            </Carousel>
                            

                                
                            </Container>
                        </Grid>
                    </Grid>
              </Container>
            </div>
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
           
            <div style={{margin:'-8px',overflowX:'hidden',paddingLeft:'30px',paddingTop:'100px',backgroundColor:'#00203FFF',paddingBottom:'100px'}}>
                <Container>
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
                </Container>
            </div>

           <Container>
                <Galleries/>
            </Container>   
        </div>
    )
}

export default Home
