import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ThemeProvider } from './Theme';
import Login from './components/Login';
import LearnMore from "./components/LearnMore";
import SignUp from "./components/SignUp";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Hero from './components/Hero';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <BrowserRouter>
    <div>
    <Navigation />
    </div>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path='home' element={<Hero />} />
        <Route path="LearnMore" element={<LearnMore />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
      <App />
      <div>
        <Footer />
      </div>
    </BrowserRouter>
    </ThemeProvider> 
  </React.StrictMode>
);

