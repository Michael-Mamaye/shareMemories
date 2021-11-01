import React, { useState, useEffect } from 'react';
import { Container,Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../Posts/Posts';
import { getPosts } from '../../actions/posts';



function List() {
    
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();


    useEffect(() => {
    dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
            <Container maxWidth="lg">
        
                <Grow in>
                    <Container maxWidth="lg">
                        <Grid style={{paddingTop:'80px'}} container justify="space-between" spacing={3}>
                                <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                    </Container>
                </Grow>
         </Container>
        
    )
}

export default List
