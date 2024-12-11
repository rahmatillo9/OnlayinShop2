import { useEffect, useState } from 'react';
import {  Navbar, Home, About, Contact, Pricing,  Products2, ProductsDetails} from './components';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const ls = localStorage.getItem('user');
    if (ls) {
      setUser(ls);
    }
  }, []);


  

  return (
    <div>
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        <Route path='products' element={<Products2/>}/>
        {/* <Route path="/productDetails/:id" element={<ProductDetails />} /> */}
      </Routes>

     

    </div>
  );
};

export default App;
