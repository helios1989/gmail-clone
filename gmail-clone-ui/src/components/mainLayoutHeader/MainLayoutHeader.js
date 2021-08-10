import React,{useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton}from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import './MainLayoutHeader.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    newMessage,
    deleteMessage,
    selectMessages
} from '../../slices/messageSlices/MessageSlices';
import {
    checkMessages,
    uncheckMessages,
    selectCheckMessages
} from '../../slices/chkMessages/chkMessageSlices';

function MainLayoutHeader(props) {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(false);
    const [isCheckAll, setCheckAll] = useState(false);
    const checkSelectMessages = useSelector(selectCheckMessages)
    const messageSlice = useSelector(selectMessages);
    const openSimpleMenu = () => {
        setAnchorEl(true);
      };
    
    const handleClose = (e) => {
        e.preventDefault();
        setAnchorEl(false);
    };

    const handleDeleteMessage = (e) => {
        dispatch(deleteMessage(checkSelectMessages));
        checkSelectMessages.forEach((v) => {
            dispatch(uncheckMessages(v));
        });
    }

    const handleSelectAllChkMessage = () => {
 
        if (!isCheckAll) {
            messageSlice.forEach((v) => {
                dispatch(checkMessages(v.id));
            });
            setCheckAll(true)
        } else {
            setCheckAll(false);
            messageSlice.forEach((v) => {
                dispatch(uncheckMessages(v.id));
            });
        }
   
        console.log(checkSelectMessages);
    }
    return (
        <>
        <div className="mainLayoutHeader">
            <div className="mainLayoutHeader-left">
                <Checkbox onClick={handleSelectAllChkMessage}>
                    {console.log(checkSelectMessages)}
                </Checkbox>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RefreshIcon/>
                </IconButton>
                <IconButton onClick={handleDeleteMessage}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton onClick={openSimpleMenu}  aria-controls="simple-menu" aria-haspopup="true" >
                     <MoreVertIcon/>
              
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={anchorEl}
                    onClose={handleClose}
                >
                <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
            </div>
            <div className="mainLayoutHeader-right">
                <span>1-5 of 28,404</span>
                <KeyboardArrowLeftIcon/>
                <KeyboardArrowRightIcon/>
                <KeyboardIcon/>
                <ArrowDropDownIcon/>
            </div>
        </div>
        </>
    );
}

export default MainLayoutHeader;