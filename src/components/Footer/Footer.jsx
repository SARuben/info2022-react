import Typography from '@mui/material/Typography';

function Footer(props) {
    return (
      <Typography
          component = 'footer'
          variant = "body2"
          color = "text.success"
          align = "center"         
          display = 'flex'
          flexDirection  = 'column'
          justifyContent = 'space-around'
          
          sx = {{  
              height: '60px',
              background: '#bdbdbd',
              marginTop: '30px'    
         }}          
        >
        Copyright ©         
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  export default Footer; 