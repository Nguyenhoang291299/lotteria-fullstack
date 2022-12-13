import logo from './logo.svg';
import './App.css';
import Login from './containers/auth/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
          <Route path='/' element={<Home />} />
          <Route path="login" element={<Login />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
