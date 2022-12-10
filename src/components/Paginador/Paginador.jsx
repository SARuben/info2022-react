import {Pagination} from '@mui/material';

const Paginador = ({
    contador,
    onChange,
}) => { 
    
    const cambiaPagina = (_evento,pagina) => {
        onChange(pagina);
    }
    return (  
        <Pagination style= {{
            display:'flex',
            flexWrap:'wrap',
            flexDirection: 'row',
            justifyContent:'space-around',
            marginTop:'30px',
         
        }}
            count ={contador}
            shape= 'rounded'
            color = 'primary'
            onChange = {cambiaPagina} 
            size = 'large'
            
        />
        
    )
};  
export default Paginador;   
