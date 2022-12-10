import { IconButton, InputBase, Paper,Button } from "@mui/material";
import { useState } from "react";
import { Stack } from '@mui/material';
import { Box } from "@mui/system";

const Busqueda = () => {
    const [criterioBusqueda,setCriterioBusqueda] = useState()
    const handleKeyPress = () => {
        console.log( "Presionaste una tecla" )
    };
    return (
        <Paper
            component= 'form'
            sx={{ p:'4px 4px ',
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',
                width:'400',
                square:true,
                marginTop:10,}}
        > 
            
                <InputBase
                    sx = {{ ml:1, flex:1}}
                    placeholder = 'Buscar Noticias'
                    inputprops = {{'aria-label': 'search google maps'}}
                    value = {criterioBusqueda}
                    onKeyPress={(e) => handleKeyPress(e)}
                >
                </InputBase>    
            
                <Button 
                    variant = 'contained'
                    color   = "error"> Buscar
                </Button>   
            
         </Paper>
 
    )
}

export default Busqueda;