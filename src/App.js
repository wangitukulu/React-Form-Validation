import React, { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import NavigationMenu from './Components/NavigationMenu';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import RegistrationForm from "./Components/RegistrationForm";

function App() {
  const [finalPrice, setFinalPrice] = useState(0); 
  const [total,setTotal] = useState(false);
  return (
    <div className="App">

      {/* // ADD OTHER COMPONENTS HERE */}
      <NavigationMenu finalPrice={finalPrice} total={total} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="Products" element={<Products setFinalPrice={setFinalPrice} setTotal={setTotal}/>} />
        <Route path="About" element={<About />} />
      </Routes>
      <RegistrationForm />

    </div>
  );
}
export default App;
