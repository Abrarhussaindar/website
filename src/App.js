import './App.scss';

import Home from "../src/components/pages/Home/Home"

import NoPage from "../src/components/pages/NoPage/NoPage"
import Cart from "../src/components/pages/Cart/Cart"
import AboutUs from "../src/components/pages/AboutUs/AboutUs"
import ContactUs from "../src/components/pages/contactus/contactUs"
import Product from "../src/components/pages/Product/Product"
import Login from "../src/components/Auth/Login/Login"
import Register from "../src/components/Auth/Register/Register"

import Navbar from "../src/components/individuals/Navbar/Navbar"
import Footer from "../src/components/individuals/Footer/Footer"

import {
  Outlet,
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <SecondaryNavbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

// const MainLayout = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       {/* <SecondaryNavbar /> */}
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='*' element={<NoPage />}/>
            <Route exact path='/cart' element={<Cart />}/>
            <Route exact path='/aboutus' element={<AboutUs />}/>
            <Route exact path='/contactus' element={<ContactUs />}/>
            <Route exact path='/product' element={<Product />}/>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/forgotpassword" element={<ForGotPassword />} /> */}
          {/* <Route path="/profile/:userId" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
