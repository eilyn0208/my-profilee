import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);