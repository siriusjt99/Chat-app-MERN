import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Let's Build a chat app</h1>
      <div app__bodyP >
      

     <Sidebar/> {/* Sidebar */}
     <Chat/> {/* Chat-component */}
     </div>
    </div>
  );
}

export default App;
