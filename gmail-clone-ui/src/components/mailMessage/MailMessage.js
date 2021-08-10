import React, {useState} from 'react';
import './MailMessage.css';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import {
    selectMessages
} from '../../slices/messageSlices/MessageSlices';
import {
    uncheckMessages,
    checkMessages,
    selectCheckMessages
  } from '../../slices/chkMessages/chkMessageSlices';
import {
    Route,
    Link,
    useHistory
  } from "react-router-dom";
  
import { useSelector, useDispatch } from 'react-redux';
function MailMessage(props) {
    let history = useHistory();
    const messageSlice = useSelector(selectMessages);
    const checkMessageSlices = useSelector(selectCheckMessages);
    
    const dispatch = useDispatch();
    
    let msgContainer = [];

    const onHandlerCheckMessage =  (msg) => {
        let holder;
        if (checkMessageSlices.length && checkMessageSlices.findIndex((v) => v === msg.id) > -1) {
            dispatch(uncheckMessages(msg.id));
        } else {
            msgContainer = [...msgContainer, msg.id]
            dispatch(checkMessages(msg.id));
        }
        console.log(checkMessageSlices);
    }
    return (
        <>
        {messageSlice && messageSlice.map((data) => {
            return (<div className="mail-message">
                <div className="mail-box-left">
                    <Checkbox onClick={()=> onHandlerCheckMessage(data)} id={data.id} key={data.id} checked={checkMessageSlices.find((v)=>v === data.id) !== undefined}/>
                    <IconButton>
                        <StarBorderIcon/>
                    </IconButton>
                    <span className="mail-subject-message">
                        <Link to="/newmessage">{data.subject}</Link> </span>
                    <span className="mail-tag"> </span>
                </div>
                <div className="mail-box-center">
                    <span className="maiil-descriptin-message">{data.message}</span>
                </div>
                <div className="Mail-box-right">
                    <span className="mail-date-time">Date and Time</span>
                </div>
            </div>)
        })}

        </>
    );
}

export default MailMessage;