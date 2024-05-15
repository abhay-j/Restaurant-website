import "./App.css";
import HomePage from "./Components/homepage/homepage";
import Navbar from "./Components/navbar/navbar";
import AboutPage from "./Components/aboutpage/aboutpage";
import MenuPage from "./Components/menupage/menupage";
import LoginPage from "./Components/loginpage/loginpage";
import SignupPage from "./Components/signuppage/signuppage";
import {Route, Routes} from "react-router-dom";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/menu" element={<MenuPage />} />
         <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignupPage /> } />
        {/* <HomePage /> */}
        {/* <AboutPage /> */}
        {/* <MenuPage /> */}
        {/* <LoginPage /> */}
        {/*  <SignupPage /> */}
      </Routes>
   
    </>
  );
}
