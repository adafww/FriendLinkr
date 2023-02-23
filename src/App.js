import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
                </Routes>
            </main>
            <Footer/>
    </div>
  );
}

export default App;
