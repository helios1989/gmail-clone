import React,{useState} from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/header/Header';
import RightSidebar from './components/sidebar/RightSidebar';
import MainLayout from './layout/MainLayout';
import NewMessagePopup from './components/newMessagePopup/NewMessagePopup';
import Login from './components/login/Login';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [isNewMessage, setIsNewMessage] = useState(false);

  const newMessageHandler = (isBool) => {
    setIsNewMessage(isBool);
  }
  



  return (
    <Router>
      
        <div>
            <Header/>
            <div className="content">
              <RightSidebar onHandlerClick={newMessageHandler}/>
              <Switch>
                <MainLayout/>
              </Switch>
            </div>
            {isNewMessage && <NewMessagePopup onHandlerClick={newMessageHandler}/>}
        </div>
   </Router>
 );
}

export default App;
