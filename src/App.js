import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Comics from "./pages/Comics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="about" element={<About />} />
        <Route path="comics" element={<Comics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
