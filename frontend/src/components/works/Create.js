
import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
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
        <div>
            <Container maxWidth="lg">
                    <Grid style={{paddingTop:'80px'}} container justify="space-between" alignItems="stretch" spacing={2}>
                        <Grid item xs={12} sm={12} md={3}></Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}></Grid>
                    </Grid>
                    <UnderCreate/>
            </Container>
        </div>
    )
}

export default Create
