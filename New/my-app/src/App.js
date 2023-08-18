import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './Components/Table';
import { useSelector } from 'react-redux';


function App() {
  const login=useSelector((state)=>state.login)
  console.log(login)
  const isLogin=login.token !==null
  console.log(isLogin)
  return (
    
    <Router>
            <div className="App">

      <Routes>
      <Route path="/" element={isLogin ? <Table /> : <Login />} />

      </Routes>
      </div>

    </Router> 
  
  );
}

export default App;