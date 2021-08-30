import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import SideBar from './Components/SideBar';
import Widgets from './Components/Widgets';

function App() {
  return (
    <div className="app">
  
      {/* SideBar */}
      <SideBar/>

      {/* Feed */}
      <Feed/>

      {/* Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
