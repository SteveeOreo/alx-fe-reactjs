import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/src/components/Home.jsx" element={<Home />} />
        <Route path="/src/components/About.jsx" element={<About />} />
        <Route path="/src/components/Services.jsx" element={<Services />} />
        <Route path="/src/components/Contact.jsx" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
