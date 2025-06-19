import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';

// Minimal test components
const Home = () => <h1 className="text-4xl p-4">Home Page</h1>;
const Login = () => <h1 className="text-4xl p-4">Login Page</h1>;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;