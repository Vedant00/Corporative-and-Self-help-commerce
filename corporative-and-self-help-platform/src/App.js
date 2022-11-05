import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage';
import Login from './components/Login';
import NavBar from "./components/NavBar"
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route path='/login' element={<Login/>} />
          <Route element={<Homepage/>} />
      </Routes>
    </Router>
  );
}

export default App;
