import React from 'react';
import ProductCard from './ProductCard';
import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query';
import axios from 'axios';
import Basket from './Basket';

function ProductGrid() {
  const { data, isLoading, error } = useQuery('categoryData', () => {
    return axios.get('https://fakestoreapi.com/products').then((res) => res.data);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Grid container direction="row" justify="flex-start" spacing={1} paddingTop={6} margin="auto">
        {data?.map((product) => (
          <Grid xs={4} md={2} container spacing={1} key={product.id} margin={3}>
            <ProductCard product={product} />
            <Basket data={data} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductGrid;
