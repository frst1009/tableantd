import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterForm from './Formik_file/Registration';
// import Home from './components/Home';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<RegisterForm/>} />      
        </Routes>
    </BrowserRouter></>
  );
}
export default App;