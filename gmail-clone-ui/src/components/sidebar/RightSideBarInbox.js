import React from 'react';
import IconText from '../iconText/IconText'
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import GroupIcon from '@material-ui/icons/Group';
import VideocamIcon from '@material-ui/icons/Videocam';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
function RightSideBarInbox(props) {
    return (
        <div>
            <div className="right-side-box-inbox">
                <IconText text1="Inbox" text2="28,307" icon={<InboxIcon/>}/>
                <IconText text1="Starred" text2="" icon={<StarIcon/>}/>
                <IconText text1="Snooze" text2="" icon={<ScheduleIcon/>}/>
                <IconText text1="Send" text2="" icon={<SendIcon/>}/>
                <IconText text1="Draft" text2="" icon={<DraftsIcon/>}/>
                <IconText text1="LPS" text2="" icon={<GroupIcon/>}/>
                <IconText text1="LPS2" text2="" icon={<GroupIcon/>}/>
            </div>
            <span>Meet</span>
            <div className="side-box-social-options">
                <IconText text1="Meeting" text2="28,307" icon={<VideocamIcon/>}/>
                <IconText text1="Join Meeting" text2="" icon={<MeetingRoomIcon/>}/>
            </div>
            <div className="sidebox-footer">
                <div className="side-box-footer-socials">
                <PersonIcon/>
                <ForumIcon/>
                </div>
            </div>
        </div>

    );
}

export default RightSideBarInbox;