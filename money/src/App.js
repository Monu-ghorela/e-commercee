import React from "react";
import { Navbar } from "./navbar";
import AddProduct from "./AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./footer";
import SignUp from "./SignUp";
import PrivateComponent from "./privateComponent";
import Login from "./login";
import ProductList from "./ProductList";
import Updateproduct from "./updateproduct";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/HOmepage" element={<h1>Home page</h1>} />
            <Route path="/AddProducts" element={<AddProduct />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/Profile" element={<h2>profile</h2>} />
            <Route path="/update/:id" element={<Updateproduct />} />
          </Route>
          <Route path="/login" element={<Login />} />

          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
