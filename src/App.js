import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import ErrorPage from './pages/404/404';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import Layout from './Layout';
function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='cart' element={<Cart />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/catalog/:id' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
