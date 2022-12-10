import Box from '@mui/material/Box';
import logo192 from "../../assets/img/cubo-3d.png"; 
const Logo = () =>  {
    return (
        <Box    
            sx={{width: 80,
                height: 80,
            }}>
            <img src={logo192} width='80px' heigth= '80px' alt='imagen'>
            </img>
        </Box>
    );
    }

export default Logo; 
