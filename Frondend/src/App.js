// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Registration from './Components/Registration';
import Login from './Components/Login';
import AdminHome from './Components/AdminHome';
import CustomerHome from './Components/CustomerHome';
import Logout from './Components/Logout';
import ProductDetails from './Components/ProductDetails';
import ChangePassword from './Routes/Farmer/ChangePassword';
import Profile from './Routes/Farmer/Profile';
import Product from './Routes/Farmer/Product';
import ProductDetail from './Routes/Farmer/ProductDetail';
import AProfile from './Routes/Admin/AProfile';
import AChangePassword from './Routes/Admin/AChangePassword';
import AddProductForm from './Routes/Farmer/AddProductForm';
import RiceDetails from './Routes/Customer/RiceDetails';
import Spices from './Routes/Customer/Spices';
import Wheat from './Routes/Customer/Wheat';
import Cart from './Routes/Customer/Cart';
import OrderConfirmation from './Routes/Customer/OrderConfirmation';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';


function App() {
  const mystate = useSelector((state) => state.logged);
  

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="admin_home" element={<AdminHome />} />
        <Route path="customer_home" element={<CustomerHome />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/products/:id/details" element={<ProductDetails />} />
        <Route path='password' element={<ChangePassword/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='product' element={<Product/>}></Route>
        <Route path='productdetail' element={<ProductDetail/>}></Route>
        <Route path='aprofile' element={<AProfile/>}></Route>
        <Route path='apassword' element={<AChangePassword/>}></Route>
        <Route path='addproduct' element={<AddProductForm/>}></Route>
        <Route path='ricedetails' element={<RiceDetails/>}></Route>
        <Route path='spices' element={<Spices/>}></Route>
        <Route path='wheat' element={<Wheat/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='orderconfirmation' element={<OrderConfirmation/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
