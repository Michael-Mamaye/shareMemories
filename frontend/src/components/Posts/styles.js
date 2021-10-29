import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  SearchIconStyle: { 
    marginTop: '10px', 
    height: '40px', 
    width: '40px', 
    '&:hover': { 
      cursor: 'pointer !important' 
    }
  },
  searchFormControl:{
    borderRadius:'30px',
    height: '3rem',
    justifyContent:'center',
    alignItems:'center',
    fontSize:'17px',
    fontWeight:'bold',
    padding:'5px'
  }
}));
