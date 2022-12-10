import { useEffect, useState } from "react";
import { Container,Typography } from '@mui/material';
import Loading from '../components/Loading/Loading';
import Busqueda from '../components/Buscador/Buscador';
import Paginador from '../components/Paginador/Paginador';
import Footer from "../components/Footer/Footer";
import { useSearchParams } from "react-router-dom";
import {obtenerListaNoticias} from '../servicios/GetNoticias';
import './paginaBusqueda.css';
import {ListaDeNoticias} from '../components/noticias/Noticias'
import  AppBarHeader from '../components/Header/Header';
import { Alert } from '@mui/material';
import Box from '@mui/material/Box';

const PaginaBusqueda = () => {
    const [noticias,setNoticias] = useState('');
    const [cantidadPaginas,setCantidadPaginas] = useState(1);
    const [isLoading,setIsLoading] = useState(false);
    const [pagina,setPagina] = useState(1);
    const [searchParams,setSearchParams] = useSearchParams();
    const [resultados,setResultados] = useState(0);
    const [cantNoticias,setCantNoticias] = useState(0)
    const [resultadoBusqueda,setResultadoBusqueda] = useState(1)
    
    useEffect(() => {
        if (searchParams.get('query')) {
            buscarNoticias(pagina);
        }
    },[searchParams,pagina]
    );

    const ResultadoDeLaBusqueda = (() => {
        if (resultadoBusqueda == 0) {
            return (
             <Box sx= {{
                    display: 'flex',
                    justifyContent:'space-around',
                    }}
                    marginTop = '20px'
                >
                <Alert 
                    variant = 'filled'
                    severity = "error"              
                    sx={{ width: '50%',

                    }}
                >
                   Se ha producido un error en la conexion al servidor
                </Alert>
             </Box>    
        )}
    });

    const onBuscar = (criterioBusqueda) => {
        setSearchParams({query:criterioBusqueda})
    };

    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    } 

    const Mensaje =() => {
        if (resultados === 0) {
           return (
            <Typography className= 'mensaje' variant='p'>
                NO hay Resultados.
            </Typography>    
           )
        } 
        return (
            <Typography className= 'mensaje' variant='p'>
                Estas viendo {cantNoticias} de un total de {resultados} resultados.
            </Typography>
        )    
    }; 

    const buscarNoticias = async() => {
        try {
        setIsLoading(true);
        const {articles: Notis,totalResults} = 
        await obtenerListaNoticias(searchParams.get('query'),pagina);
            setNoticias(Notis);     
            setResultados(totalResults)
            setCantidadPaginas(Math.ceil(totalResults/10));
            setCantNoticias(Notis.length);  
            setResultadoBusqueda(1)
        } catch(error) {
            setResultadoBusqueda(0)
        } finally {
            setIsLoading(false);
        }    
    }

    return (
        <Container maxWidth = 'md'>
            <AppBarHeader />
            <Busqueda onBuscar = {onBuscar}/> 
            {isLoading && <Loading />}
            <Mensaje />  
            <ResultadoDeLaBusqueda />

    
            {noticias && <ListaDeNoticias noticias = {noticias}/>}
            {noticias && <Paginador
                contador = {cantidadPaginas}
                onChange = {onCambioPagina}
             />
            } 
            <Footer />
        </Container>
    )
};
export default PaginaBusqueda;