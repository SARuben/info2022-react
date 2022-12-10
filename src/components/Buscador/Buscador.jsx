import { IconButton, InputBase, Paper,Button,Container} from "@mui/material";
import { useState, useEffect} from "react";



const Busqueda = ({onBuscar}) => {
    const [criterioBusqueda,setCriterioBusqueda] = useState('');
    const [disableBoton,setDisableBoton] = useState(false)

    useEffect (()=>  {
        if (criterioBusqueda.length > 2) {
            setDisableBoton(false)

        } else {
            setDisableBoton(true) 
        }
    },[disableBoton,criterioBusqueda.length]);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (criterioBusqueda.length > 2) {
                onBuscar(criterioBusqueda)
            }
        }    
    }

    const asignarValorBusqueda = (e) => {
        setCriterioBusqueda(e.target.value)
    }

    return (
        <Paper
          component = 'div'
          sx={{ p:'4px 4px ',
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          marginTop:10,}}
        >
            
        <InputBase
            sx = {{ ml:1, flex:1}}
            placeholder = 'Buscar Noticias'
            value = {criterioBusqueda}
            role="searchbox"
            component='Input'
            onChange = {(e) => {
                setCriterioBusqueda(e.target.value)   
            }}
            onKeyDown= {handleKeyDown}           
        >
        </InputBase>
        
        <Button                
            size    = "medium"
            variant = 'contained'
            color   = "error"
            aria-label = "busqueda"
            role = 'button' 
            disabled = {disableBoton}
            onClick = {() => {if (criterioBusqueda.length > 2) {
                        onBuscar(criterioBusqueda) }}}
            > Buscar    
        </Button>  
    </Paper>      
 
    )
}
export default Busqueda;