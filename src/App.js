import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
function App() {
  return (
    <div className="App">
      <h1>Welcome to MYO Resume</h1>
      <MessengerCustomerChat
        pageId="108138601028407"
        appId="304838707479650"
        //htmlRef="<REF_STRING>"
      />
    </div>
  );
}

export default App;
