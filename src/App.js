
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  
  useEffect(() => {
    if(user){
      console.log("user: ",user )
      var decodedToken=jwtDecode(user?.data?.token, {complete: true});
      var dateNow = new Date();
      if(decodedToken.exp * 1000 < dateNow.getTime()){
        window.localStorage.removeItem('user');
       
      }    
    }

  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

      <Route element={<PrivateComponent />}>
      <Route path='/' element= {<ProductList/>} />
      <Route path='/add' element= {<AddProduct/>} />
      <Route path='/update/:id' element= {<UpdateProduct/>} />
      <Route path='/delete' element= {<h1>Delete Product Component</h1>} />
      <Route path='/Profile' element= {<h1>Profile Component</h1>} />
      </Route>

      <Route path='/signup' element= {<Signup/>} />
      <Route path='/login' element= {<Login/>} />
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
