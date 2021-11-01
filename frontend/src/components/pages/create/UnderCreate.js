import React from 'react'
import useStyles from './style'
import {Container,Typography,Grid} from '@material-ui/core'


function UnderCreate() {
    const classes=useStyles();
    return (
        <div>
            <div style={{margin:'-8px',overflowX:'hidden',paddingLeft:'30px',paddingTop:'100px',paddingBottom:'100px'}}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} padding='10px' >
                             <Typography className={classes.titlebigcreate}>What Are Your Memories</Typography>
                        </Grid>
                        <Grid container style={{paddingTop:'100px'}} xs={12} sm={12} spacing={5}>
                                    <Grid style={{borderRadius:'30px'}} item lg={4}xs={6}>
                                        <Typography className={classes.titlecreate}>Historical Memories</Typography>
                                        <Typography className={classes.parcreate}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4}xs={6}>
                                        <Typography className={classes.titlecreate}>Vacation Memories</Typography>
                                        <Typography className={classes.parcreate}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4}xs={6}>
                                        <Typography className={classes.titlecreate}>Childhood Memories</Typography>
                                        <Typography className={classes.parcreate}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    <Grid borderRadius='30%' item lg={4}xs={6}>
                                        <Typography className={classes.titlecreate}>Place Memories</Typography>
                                        <Typography className={classes.parcreate}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4}xs={6}>
                                        <Typography className={classes.titlecreate}>Childhood Memories</Typography>
                                        <Typography className={classes.parcreate}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    <Grid item  lg={4}xs={6}>
                                        <Typography className={classes.titlecreate}>Vacation Memories</Typography>
                                        <Typography className={classes.parcreate}>
                                            Lorem, ipsum dolor sit amet consectetur consequatur aliquid nesciunt ad,
                                            adipisicing elit. Quaerat, tenetur rem cupiditate dolor,
                                            qui assumenda. Repellendus quis distinctio itaque exercitationem
                                        </Typography>
                                    </Grid>
                                    
                        </Grid>
                    </Grid>
                    </Container>
            </div>
            
        </div>
    )
}

export default UnderCreate
