import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pharmacy from "./NavbarComponents/pharmacy";
import Labtest from "./NavbarComponents/labtest";
import Blogs from "./NavbarComponents/blogs";
import Consultonline from "./NavbarComponents/consultonline";
import Profile from "./NavbarComponents/Profile";
import Cart from "./NavbarComponents/Cart";
import Homepage from "./Homepage";
import PersonalCare from "./Navbar2Components/PersonalCare";
import Ayurveda from "./Navbar2Components/Ayurveda";
import BabyCare from "./Navbar2Components/BabyCare"
import HealthEssentials from "./Navbar2Components/HealthEssentials"
import WomenCare from "./Navbar2Components/WomenCare"
import Nutritions from "./Navbar2Components/Nutritions"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/ConsultOnline" element={<Consultonline />}></Route>
          <Route path="/Pharmacy" element={<Pharmacy />}></Route>
          <Route path="/LabTests" element={<Labtest />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/Ayurveda" element={<Ayurveda />}></Route>
          <Route path="/BabyCare" element={<BabyCare />}></Route>
          <Route path="/HealthEssentials" element={<HealthEssentials />}></Route>
          <Route path="/WomenCare" element={<WomenCare />}></Route>
          <Route path="/HealthNutritions" element={<Nutritions />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/PersonalCare" element={<PersonalCare />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
