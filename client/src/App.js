import logo from './logo.svg';
import './App.css';

import { Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/styling/NavigationBar';

import Login from './components/authentication/Login';
import Register from './components/authentication/Registration';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
