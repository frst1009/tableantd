import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import BasketContext from './BasketContext'; 


const WhiteShoppingBasketIcon = styled(ShoppingBasketIcon)({
  color: 'white',
});

function ResponsiveAppBar() {
  const { basket } = useContext(BasketContext);
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar disableGutters>
        <AdbIcon sx={{ mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          ShopIn
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>

           <Link to={"/"}> <Button
              sx={{ my: 2, mx: 1, color: 'white' }}
            >
              Products
            </Button></Link>
            <Link to={"/login"}> <Button
              sx={{ my: 2, mx: 1, color: 'white' }}
            >
              Login
            </Button></Link>

        </Box>

        <Box sx={{ ml: 'auto' }}>
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0 }}>
             <Link to={"/Basket"}> <WhiteShoppingBasketIcon /></Link> 
            </IconButton>
          </Tooltip>
          <Typography variant="subtitle1" sx={{ color: 'white' }}>
           ( {basket.length} )
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
