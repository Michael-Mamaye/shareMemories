import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    textMessage:{
        justifyContent: 'center',
        padding:'4px',
        textAlign:'center',
        justifyItems:'center',
    },
    boxs:{
        boxShadow: '5px 5px 20px rgb(40, 40, 40)',
        padding:'20px',
        borderRadius:'10px',

    },
    submits:{
        boxShadow: '5px 5px 20px rgb(40, 40, 40)',
        backgroundColor:'rgb(8, 0, 53,0.8)',
        color:'white',
        fontWeight:'900',
        '&:hover':{
            backgroundColor:'rgba(24, 22, 27, 0.8)',
           
        }
    }
}))