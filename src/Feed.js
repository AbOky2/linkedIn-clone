import React from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import InputOption from './InputOption';
import  EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import SubscriptionsIcon  from '@material-ui/icons/Subscriptions';
function Feed() {
  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type="submit">send</button>
                    </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption Icon={ImageIcon} title="PHOTO" color="#70b5f9"/>
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>

            </div>
        </div>
    </div>
  )
}

export default Feed