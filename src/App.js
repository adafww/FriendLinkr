import './App.css';
import { Route, Routes } from "react-router-dom";

import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/UserWall';
import Logout from './pages/UserProfile';

function App() {
  return (
    <div className="App">
      <Header isLoggedIn={false} />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </main>
            <Footer/>
    </div>
  );
}

export default App;
