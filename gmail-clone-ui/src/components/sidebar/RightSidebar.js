import './RightSidebar.css';
import React from 'react';
import {Button}from '@material-ui/core';
import {Add} from '@material-ui/icons';
import RightSideBarInbox from './RightSideBarInbox';
function RightSidebar({ onHandlerClick}) {
    return (
        <div className="sidebar">
            <Button
                onClick={() =>onHandlerClick(true)}
                startIcon={<Add fontSize="large" />}
                className="sidebar_compose">Compose</Button>
            <RightSideBarInbox/>
        </div>
    );
}

export default RightSidebar;