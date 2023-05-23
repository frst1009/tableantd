// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import RegisterForm from './Formik_file/Registration';
// // import Home from './components/Home';

// function App() {
//   return (<>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/" element={<RegisterForm/>} />      
//         </Routes>
//     </BrowserRouter></>
//   );
// }
// export default App;



import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import { BasketProvider } from './pages/BasketContext';
import BasketPage from './pages/BasketPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (

        
    <BasketProvider>    <BrowserRouter><Routes>
             <Route path="/" element={<Home/>} />  
             <Route path="/basket" element={<BasketPage/>}    />
             <Route path="/login" element={<LoginPage/>}    />
             </Routes> </BrowserRouter></BasketProvider>   
      
  );
}

export default App;
