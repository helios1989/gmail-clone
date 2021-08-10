import React from 'react';
import './MainLayout.css';
import MainLayoutHeader from '../components/mainLayoutHeader/MainLayoutHeader';
import TabbedContent from '../components/tabbedContent/TabbedContent';
import InboxMailMessage from '../components/inboxMailMessage/InboxMailMessage';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
function MainLayout({text}) {
    return (
        <div className="main-content">
            <MainLayoutHeader/>
            <div className="tabbedContent">

            <Route exact path="/newmessage">
                <InboxMailMessage/>
            </Route>
            </div>
        </div>
    );
}

export default MainLayout;