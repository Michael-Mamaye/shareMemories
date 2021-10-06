import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    marginLeft:'-10px',
    marginBottom:'30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position:'fixed',
    backgroundColor:'#6CCFF6',
  },
  heading: {
    Color:'white',
    // color: 'rgba(0,183,255, 1)',
  },
  mainNav:{
    backgroundColor:'black',
    marginLeft:'-10px',
    marginBottom:'30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position:'fixed'
  },
  links:{
      // color: 'rgba(0,183,255, 1)',
      color:'white',
      letterSpacing:'1px',
      margin:'10px',
      fontWeight:'bolder',
      fontSize:'21px',
      textDecoration:'none'
  }
  
}));
