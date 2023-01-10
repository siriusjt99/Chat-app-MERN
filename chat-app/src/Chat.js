import {AttachFile,Message,MoreVert,SearchOutlined} from "@material-ui/icons";
import {Avatar , IconButton}from "@material-ui/core";
import React from 'react';
import "./Chat.css";
function Chat() {
  return (
    <div className='chat'>
     <div className='chat__header'>
      <Avatar/>
      <div className='chat__headerinfo'>
        <h3>Room name</h3>
        <p>Last seen at...3</p>
      </div>
      <div className='chat__headerRight'>
      <IconButton>
     <SearchOutlined/>
    </IconButton>
    <IconButton>
     <AttachFile />
    </IconButton>
    <IconButton>
     <MoreVert />
    </IconButton>
      </div>
     </div>
     <div className="chat__body">
      <p>
        <span className="chat__name">Kookie</span>
        This is a message
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
        </p>
     </div>
    </div>
  )
}

export default Chat
