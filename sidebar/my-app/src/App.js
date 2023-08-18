import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Join_user from './Pages/Join_user';
import PaymentHistory from './Pages/paymentHistory';
import Pin_Request from './Pages/Pin_Request';
import View_pin from './Pages/View_pin';
import Tree from './Pages/Tree';
function App() {
  return (
   <BrowserRouter>
    <Sidebar>
   <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/join_user' element={<Join_user/>}/>

    <Route path='/paymentHistory' element={<PaymentHistory/>}/>
    <Route path='/pin_request' element={<Pin_Request/>}/>
    <Route path='/tree' element={<Tree/>}/>
    <Route path='/view_pin' element={<View_pin/>}/>
   </Routes>
  </Sidebar>
   </BrowserRouter>
  );
}

export default App;
