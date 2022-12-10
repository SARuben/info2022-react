import { Card, CardActionArea, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import {DateTime} from 'luxon';

const Noticia = (
    {noticia,
    onChange
}) => {
    const fechaPublic =  DateTime.fromISO(noticia.publishedAt)
                                 .setLocale('fr')
                                 .toLocaleString();
    const horaPublic = DateTime.fromISO(noticia.publishedAt)
                               .toLocaleString(DateTime.TIME_SIMPLE) ;
    
    const onCardClick = () => {
        window.open(noticia.url,'_blank')
        onChange && onChange(noticia);
        
    };
    return (
    <Card sx={{ 
        width:'md',
        marginTop:10,
        textAlign:'left',
        shape:'rounded',
        }}
    >
        <CardActionArea onClick = {onCardClick}>
            <Box sx={{
                display:'flex',
                flexDirection:'row',
            }}>
                <Box sx={{
                   display:'flex',
                   flexDirection:'column',
                }}>
                <CardContent>
                    <Typography variant='h6' >     
                        {noticia.title}
                    </Typography>
                    <Typography gutterBottom variant="p" component='p'>
                    {noticia.description}
                    </Typography>

                    <Typography variant='body2' color='text-secondary'>
                        Fuente: {noticia.source.name}
                    </Typography >

                    <Typography variant='body2' color='text-secondary'>
                        Publicado el: {fechaPublic} a las {horaPublic} hs.
                    </Typography>

                </CardContent>     
            </Box>
            <CardMedia 
                component ='img'
                sx= {{ width:150,
                   RoundedCorner: 'true',
                   mt: 2,
                }}
                
                height ='150'
                image  = {noticia.urlToImage} 
                alt    = 'imagen' 
            >    
            </CardMedia>
            </Box>    
        </CardActionArea>
    </Card>
    ) 
};
export const ListaDeNoticias = ({noticias}) => {
    const onNoticiaClick = () => {
        
      }
    return (
        <section style= {{
            display:'flex',
            flexWrap:'wrap',
            flexDirection: 'row',
            justifyContent:'space-around',
            marginTop:'20',
        }}>
            {
                noticias.map((noticia,index) =>{
                    return <Noticia
                    key = {index}
                    noticia  = {noticia}
                    onChange = {onNoticiaClick}
                    /> 
                })
                
            }
        </section>
    ) 
};
export default Noticia;