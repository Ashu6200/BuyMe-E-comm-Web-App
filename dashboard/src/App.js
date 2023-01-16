import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import AddProduct from './components/AddProduct';
import Posts from './pages/Posts';
import AddBlog from './components/AddBlog';
import Order from './pages/Order';
import Login from './pages/Login';
import ProtectedRouter from './helper/ProtectedRouter';


function App() {
  return (
    <>
      <ToastContainer position='bottom-center' limit={1} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <ProtectedRouter>
              <Dashboard />
            </ProtectedRouter>

          } />
          <Route path="/users" element={
            <ProtectedRouter>
              <Users />
            </ProtectedRouter>

          } />
          <Route path="/products" element={
            <ProtectedRouter>
              <Products />
            </ProtectedRouter>

          } />
          <Route path="/addproducts" element={
            <ProtectedRouter>
              <AddProduct />
            </ProtectedRouter>

          } />
          <Route path="/posts" element={
            <ProtectedRouter>
              <Posts />
            </ProtectedRouter>

          } />
          <Route path="/addblogs" element={
            <ProtectedRouter>
              <AddBlog />
            </ProtectedRouter>

          } />
          <Route path="/orders" element={
            <ProtectedRouter>
              <Order />
            </ProtectedRouter>

          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
