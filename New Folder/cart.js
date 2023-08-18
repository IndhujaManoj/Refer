var c=0;
document.getElementById("value").innerText =c;
function increment(){
    c+=1;
    document.getElementById("value").innerText = c;
}
function decrement(){
    c-=1;
    document.getElementById("value").innerText = c;
}
function reset(){
    c=00;
    document.getElementById("value").innerText = c;
}


// var b=0;
// document.getElementById("value1").innerText =b;
// function increment1(){
//     b+=1;
//     document.getElementById("value1").innerText = b;
// }
// function decrement1(){
//     b-=1;
//     document.getElementById("value1").innerText = b;
// }
// function reset1(){
//     b=00;
//     document.getElementById("value1").innerText = b;
// }


// var a=0;
// document.getElementById("value2").innerText =a;
// function increment2(){
//     a+=1;
//     document.getElementById("value2").innerText = a;
// }
// function decrement2(){
//     a-=1;
//     document.getElementById("value2").innerText = a;
// }
// function reset2(){
//     a=00;
//     document.getElementById("value2").innerText = a;
// }


















import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import { getItem } from 'utils/localStorageController';
import { ConnectedRouter } from 'connected-react-router';

// Containers
import DefaultLayout from './layouts/DefaultLayout';

// Login Page
import Login from './views/Login';
import Activate from './views/Activate';

// Home Page
import { Container } from 'sdq-ui';
import { updateUserSession, fetchUserData } from 'reduxStore/slices/user/UserSlice';
import Dashboard from 'views/pages/dashboards';
import CodeEditor from 'components/CodeEditor';

function App({ history }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { signIn } = user;
  const a_token = getItem('a_token');

  // useEffect(() => {
  //   dispatch(fetchUserData());
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DefaultLayout} />

        {/* <Route path="/pin-request" component={PinRequestRoute} />
        <Route path="/view-pin" component={ViewPin} />
        <Route path="/join-User" component={JoinUser} />
        <Route path="/tree" component={Tree} />
        <Route path="/payment-received-history" component={PaymentReceived} /> */}

        {/* <Route path="/activate" component={Activate} /> */}
        <Route path="/defaultlayout" component={DefaultLayout} />
        <Route path="/code-editor" component={CodeEditor} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;








