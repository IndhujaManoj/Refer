import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Table from './Components/Table';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link, useNavigate, Routes } from 'react-router-dom';
function App() {
  const login = useSelector((state) => state.login);
  console.log(login.error,"error")
if(login.error!=null){
console.log('correct')
}
const isLoggedIn = login.user !== null;

  return (
  
<Router>
      <div className="App">

        <Routes>

          <Route path="/" element={isLoggedIn ? <Table /> : <Login />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
