
import React, { useState, useEffect } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import UnderCreate from './create/UnderCreate';
import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';

function Create() {
    
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();


    useEffect(() => {
    dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <div >
            
                <div style={{display:'flex',alignContent:'center',padding:'100px',background:'#00203FFF'}}>
                    <Container maxWidth="lg" >
                         <Grow in>
                            <Grid style={{paddingTop:'80px'}} container justify="space-between" alignItems="stretch" spacing={2}>
                                <Grid item xs={12} sm={12} md={3}></Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}></Grid>
                            </Grid>
                        </Grow>
                    </Container>
                </div>
            
            <Container>
                <UnderCreate/>         
            </Container>   
               
        </div>
    )
}

export default Create
