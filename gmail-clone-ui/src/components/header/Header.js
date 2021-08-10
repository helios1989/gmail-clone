import React,{useState} from 'react';
import './Header.css'

import MenuIcon from '@material-ui/icons/Menu';
import {Icon, IconButton}from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//components
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Search from '../search/Search';
import LeftDrawerMenu from '../leftDrawerMenu/LeftDrawerMenu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});

function Header() {
    const classes = useStyles();
    const [showDrawer, setShowDrawer] = useState(false)
    const onBurgerClickMenu = (isShow) => {
        setShowDrawer(isShow);
    }
    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={onBurgerClickMenu(anchor, false)}
          onKeyDown={onBurgerClickMenu(anchor, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

      const DrawerList = () => {
          return (
            <div>
            {
              <React.Fragment key={'left'}>
                <Button onClick={onBurgerClickMenu( true)}>{'left'}</Button>
                <Drawer anchor={'left'} open={showDrawer} onClose={()=>onBurgerClickMenu(false)}>
                  {list('left')}
                </Drawer>
              </React.Fragment>
           }
          </div>
          )
      }

    return (
        <>
        <div className="header">
            <div className="header_left">
                <IconButton onClick={()=>onBurgerClickMenu(true)}>
                    <MenuIcon/>
                </IconButton>
                <img src="https://www.citypng.com/public/uploads/preview/-11597272377xtovj4zmfl.png" alt="Gmail" />
            </div>
            <div className="header_center">
                <Search/>
            </div>
            <div className="header_right">
                <IconButton>
                    <HelpOutlineIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <AccountCircleIcon/>
                </IconButton>
            </div>
        </div>
        {showDrawer && <DrawerList/>}
        </>
    );
}

export default Header;