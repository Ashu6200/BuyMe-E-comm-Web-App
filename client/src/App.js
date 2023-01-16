
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Register from './pages/Register';
import Wish from './pages/Wish';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Blog from './pages/Blog';
import Product from './pages/Product';
import Order from './pages/Order';
import BlogItem from './Components/BlogItem';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRouter from './helper/ProtectedRouter';

function App() {
  return (
    <>
      <ToastContainer position="top-center" limit={1} />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
          } />
          <Route path='/shop' element={
            <ProtectedRouter>
              <Shop />
            </ProtectedRouter>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/wish' element={
            <ProtectedRouter>
              <Wish />
            </ProtectedRouter>
          } />
          <Route path='/cart' element={
            <ProtectedRouter>
              <Cart />
            </ProtectedRouter>
          } />
          <Route path='/account' element={
            <ProtectedRouter>
              <Account />
            </ProtectedRouter>

          } />
          <Route path='/blogs' element={
            <ProtectedRouter>
              <Blog />
            </ProtectedRouter>

          } />
          <Route path='/blogs/:id' element={
            <ProtectedRouter>
              <BlogItem />
            </ProtectedRouter>

          } />
          <Route path='/product/:id' element={
            <ProtectedRouter>


              <Product />
            </ProtectedRouter>

          } />
          <Route path='/order/:id' element={
            <ProtectedRouter>
              <Order />
            </ProtectedRouter>
          } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
