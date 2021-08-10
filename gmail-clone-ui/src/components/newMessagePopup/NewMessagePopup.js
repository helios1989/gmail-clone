import React,{useState} from 'react';
import './NewMessagePopup.css';
import MinimizeIcon from '@material-ui/icons/Minimize';
import HeightIcon from '@material-ui/icons/Height';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';

import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../features/counter/counterSlice';

import {
    newMessage,
    selectMessages
  } from '../../slices/messageSlices/MessageSlices';

function NewMessagePopup({onHandlerClick}) {
    const initialMessage = {
        id: '',
        to: '',
        subject: '',
        messsage: '',
        from: 'verge@gmail.com',
    }


    const dispatch = useDispatch();
    const messageSlice = useSelector(selectMessages);
    const [messages, setNewMessage] = useState(initialMessage)
    const onHandlerClose= (isNew) => {
        onHandlerClick(isNew);
    }

    const onHandlerTextChange = (inputData) => {
       
       setNewMessage({...messages, ...inputData})
       
    }
    const onHandlerNewMessage = () => {
        let newMessageko = {...messages, ...{'id': uuidv4()}};       
        setNewMessage(newMessageko);
        dispatch(newMessage(newMessageko))
    }

    const formInput = (obj, value)  => {
        let objData = {};
        objData[obj] = value;
        onHandlerTextChange(objData)
    }
    const {to,subject,message,from} = messages;
    return (
        <div className="new-message-popup">
            <div className="new-message-header">
                <div className="new-message-popup-right">
                    <span>New Message</span>
                </div>
                <div classsName="new-message-popup-left">
                    <IconButton onClick={() => onHandlerClose(false)}>
                        <MinimizeIcon/>
                    </IconButton>
                    <IconButton>
                        <div className="height-icon">
                        <HeightIcon/>
                        </div>
                    </IconButton>
                    <IconButton onClick={() => onHandlerClose(false)}>
                        <CloseIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="message-to">
                <Input placeholder="To" value={to} inputProps={{ 'aria-label': 'description' }}  onChange={(event) => formInput('to',event.target.value)} />
                <Input placeholder="Subject"  value={subject} inputProps={{ 'aria-label': 'description' }} onChange={(event) => formInput('subject', event.target.value)} />
            </div>
           
            <div className="message-description">
                <TextField
                    id="message-description"
                    multiline
                    rows={13}
                    defaultValue=""
                />
            </div>
            <div className="message-buttons">
            <Button variant="contained" color="primary" onClick={onHandlerNewMessage}>Send</Button>
            </div>
        </div>
    );
}

export default NewMessagePopup;