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
    backgroundColor:'#00203FFF',
  },
  heading: {
    Color:'#ADEFD1FF',
    // color: 'rgba(0,183,255, 1)',
  },
  mainNav:{
    backgroundColor:'#00203FFF',
    marginLeft:'-10px',
    marginBottom:'30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position:'fixed'
  },
  links:{
      
      color:'#ADEFD1FF',
      letterSpacing:'1px',
      margin:'10px',
      fontWeight:'bolder',
      fontSize:'21px',
      textDecoration:'none'
  },
  withoutShadow:{
    boxShadow:'0px 0px 0px black'
  }
  
}));
