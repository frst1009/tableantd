import React from 'react';
import ProductGrid from './ProductGrid';
import ResponsiveAppBar from './Navbar';
import { QueryClient, QueryClientProvider} from 'react-query';


const queryClient = new QueryClient();
function Home() {

  return (
    <div>
      <ResponsiveAppBar/>   {/* this is located in navbar */}

      <QueryClientProvider client={queryClient}>
      <ProductGrid /> 
    </QueryClientProvider>
    </div>
  );
}

export default Home;
