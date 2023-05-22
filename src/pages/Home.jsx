import React from 'react';
import ProductGrid from './ProductGrid';
import { QueryClient, QueryClientProvider} from 'react-query';
import Layout from './Layout';


const queryClient = new QueryClient();
function Home() {

  return (
    <div>

      <QueryClientProvider client={queryClient}>
     <Layout>
      <ProductGrid/>
     </Layout>
    </QueryClientProvider>
    </div>
  );
}

export default Home;
