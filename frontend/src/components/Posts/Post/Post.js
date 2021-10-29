import React,{useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,Dialog } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import Form from "../../Form/Form"
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import CloseIcon from '@material-ui/icons/Close'
const Post = ({ post }) => {
  const [Open, setOpen] = useState(false)
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);

  return (
    <Card className={classes.card}>
      
        <Dialog open={Open}>
          <CloseIcon onClick={()=>{
            setOpen(false)
            }}></CloseIcon>
          <Form  currentId={currentId} setOpen={setOpen} setCurrentId={setCurrentId}/>
      </Dialog>

      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" 
          onClick={async() =>{
            await setCurrentId(post._id)
            setOpen(true);
            
          }}
          
          ><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
