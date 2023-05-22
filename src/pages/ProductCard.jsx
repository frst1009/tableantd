import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductCard({ product, handleClick }) {
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
        <Button size="small" color="primary" onClick={()=>handleClick(product.id)}>
          Add
        </Button>
        <Typography variant="h6" component="p">
          ${product.price}
        </Typography>
      </CardActions>
    </Card>
  );
}