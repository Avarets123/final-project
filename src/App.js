import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import ErrorPage from './pages/404/404';
import Cart from './pages/Cart/Cart';
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/categoryId:id' element={<Home />} />
      </Routes>




      <Footer />
    </>
  );
}

export default App;
