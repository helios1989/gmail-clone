import React from 'react';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {IconButton}from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import  './Search.css';

function Search(props) {
    return (
        <div className="Search">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input className="Search_Input"/>
            <IconButton>
                <CloseIcon/>
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon/>
            </IconButton>
        </div>
    );
}

export default Search;