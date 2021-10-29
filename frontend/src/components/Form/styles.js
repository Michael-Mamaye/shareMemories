
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    overflowX: 'hidden'
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius:'20px',
    [theme.breakpoints.down('sm')]:{
      padding: '0px',
      margin: '0px',
      marginLeft:'-40px',
      minWidth:'250px'
    },
    overflowX: 'hidden'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflowX: 'hidden'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor:'#00203FFF',
    font:'bold',
    fontWeight:'900',
    color:'#ADEFD1FF',
    '&:hover':{
      backgroundColor:'#ADEFD1FF',
      color:'#00203FFF',
    }
  },
  successSubmit: {
    marginBottom: 10,
    backgroundColor:'green',
    font:'bold',
    fontWeight:'900',
    color:'#ADEFD1FF',
    '&:hover':{
      backgroundColor:'#ADEFD1FF',
      color:'#00203FFF',
    }
  },
}));
