

import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import Notification from './Notification';
import Notification1 from './Notification1';

function App() {
  // const [content, setContent] = useState('');

  // const handleMouseEnter = () => {
  //   setContent('Name: Indhuja\nAge: 23\nDegree: Btech');
  // };

  // const handleMouseLeave = () => {
  //   setContent('');
  // };

  return (
    <div className="App">
      {/* <h1
        className="name"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-content={content}
      >
        Indhu
      </h1> */}



      {/* <Search/> */}

{/* <Notification1/> */}

      <Notification/>
    </div>
  );
}

export default App;
