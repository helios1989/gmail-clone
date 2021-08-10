import React from 'react';
import './InboxMailMessage.css';

import {
    Route,
    Link,
    useHistory
  } from "react-router-dom";


function InboxMailMessage(props) {
    let history = useHistory();
    return (
        <div className="mail-messages">
            <button onClick={()=>history.goBack()}>Back</button>
            Inbox MailMessage
        </div>
    );
}

export default InboxMailMessage;