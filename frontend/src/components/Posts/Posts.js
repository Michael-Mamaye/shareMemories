import React, { useState } from 'react';
import { Grid, CircularProgress, Container, FormControl, InputLabel,OutlinedInput } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search'
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const [searched,setSearched]=useState(null)
  const classes = useStyles();
  console.log(posts)
  const handleChange=(e)=>{
    let searchText= e.target.value;
    if(searchText!==null)
    {
      searchText=searchText.toLowerCase();
      let filteredItems=posts.filter((post)=>(
          post.creator.toLowerCase().includes(searchText)||
          post.title.toLowerCase().includes(searchText)
      ));
      setSearched(filteredItems)
    }
  }
  const filteredList=()=> searched? searched:posts;
  return (
    <div style={{minHeight:'500px'}}>
        <Container>
            <div style={{marginTop:'20px',marginBottom:'30px'}}>
                <FormControl >
                    <InputLabel htmlFor='searchBar' aria-current='location'
                      style={{marginLeft:'15px',marginTop:'-5px',fontWeight:'bolder'}}>
                      <span>Search</span> </InputLabel>
                    <OutlinedInput  className={classes.searchFormControl} onChange={(e)=>handleChange(e)} style={{borderBottom:'0px solid black',width:'300px'}} id='searchBar'/>
                </FormControl>
                <SearchIcon className={classes.SearchIconStyle}/>
            </div>
        </Container>
        {
          !filteredList().length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {filteredList().map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={4} spacing={2}>
                  <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
              ))}
            </Grid>
          )
        }
    </div>
  );
};

export default Posts;
