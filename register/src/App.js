import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Welcome } from './Components/Welcome';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
      </Router>
  );
}

export default App;
