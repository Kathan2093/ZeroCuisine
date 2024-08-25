import "./App.css";
import Delicious from "./components/Delicious";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";
import { Router } from "react-router-dom";
import Home from "../src/Pages/Home";

import { Route, Routes } from "react-router-dom";
import WorkStep from "./components/WorkStep";
import Behaves from "./components/Behaves";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
