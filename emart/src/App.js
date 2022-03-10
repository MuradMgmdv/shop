import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './component/Products'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
      
       <Route exact path='/' element={ <Home />}/>
       <Route exact path='/products' element={ <Products />}/>
      </Routes>

    </>



  );
}

export default App;
