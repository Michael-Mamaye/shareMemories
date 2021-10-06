import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme)=>({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
      },
      media: {
        height: '100%',
        paddingTop: '56.25%',
        backgroundBlendMode: 'darken',
      },
      title1:{
        textAlign:'center',
        fontSize:'25px',
        fontWeight:'bolder',
        fontFamily:'veranda',
        
    },
      title:{
          textAlign:'left',
          paddingLeft:'10px',
          fontSize:'25px',
          fontWeight:'bolder',
          fontFamily:'veranda',
          color: 'rgb(0, 16, 17,0.7)'
      },
      titlebig:{
        textAlign:'center',
        fontSize:'30px',
        fontWeight:'bolder',
        fontFamily:'veranda',
        color: 'rgb(0, 16, 17,0.7)'
      },
      
      par:{
        textAlign:'left',
        fontFamily:'veranda',
        fontWeight:'200',
        fontSize:'20px',
        padding:"10px",
        color: 'rgb(119, 119, 119)'
      },
      par1:{
        textAlign:'left',
        fontFamily:'veranda',
        fontWeight:'200',
        fontSize:'20px',
        padding:"10px",
      },
      Gimage:{
        maxHeight:'350px',
        maxWidth:'350px',
        alignItems:'center',
        boxShadow:'0px 0px 10px black',
        borderRadius:'15px'
      },
     
      gallerypics:{
          padding:'50px'
      },
      gallerytitle:{
        textAlign:'center',
        fontSize:'45px',
        fontWeight:'bolder',
        fontFamily:'veranda',
        color: 'rgb(0, 16, 17,0.7)'
      }
}));