// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Outlets from "./pages/Outlets";

export default function App() {
  return (
    <Router>
      <div style={{backgroundColor:"#FFFFFF"}}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/outlets" element={<Outlets />} />
        </Routes>
      </div>
    </Router>
  );
}
