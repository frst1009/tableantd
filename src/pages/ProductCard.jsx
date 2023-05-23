import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useContext } from 'react';
import BasketContext from './BasketContext'; 

export default function ProductCard({ product }) {

  const { addToBasket } = useContext(BasketContext); 

  const handleAddToBasket = () => {
    addToBasket(product); 
  };
  return (
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
        <Button size="small" color="primary" onClick={handleAddToBasket}>
          Add
        </Button>
        <Typography variant="h6" component="p">
          ${product.price}
        </Typography>
      </CardActions>
    </Card>
  );
}