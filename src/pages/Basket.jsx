import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import  BasketContext  from './BasketContext'; 
import {  CardActionArea, CardActions } from '@mui/material';


export default function Basket() {
  const { basket } = useContext(BasketContext); 


  return (<>
    {basket.map((product) => (
   <Card sx={{ maxWidth: 345 }}>
   <CardActionArea>
   <CardMedia
      sx={{ height: 140 }}
       image={product.image}
       title={product.name}
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       {product.name}
       </Typography>
       <Typography variant="body2" color="text.secondary">
       {product.description.slice(0,20)}
       </Typography>
     </CardContent>
   </CardActionArea>
   <CardActions>
     <Typography variant="h6" component="p">
       ${product.price}
     </Typography>
   </CardActions>
 </Card>
  ))}</>)
}