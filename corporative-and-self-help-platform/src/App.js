import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import OrderPage from "./components/orderpage";
import Order from "./components/Order";


function App() {
  
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/previousOrders" element={<OrderPage />} />
        <Route path="/Order" element={<Order />} />

        <Route element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
