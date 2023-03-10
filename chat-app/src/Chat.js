import {AttachFile,Message,MoreVert,SearchOutlined} from "@material-ui/icons";
import {Avatar , IconButton}from "@material-ui/core";
import React from 'react';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
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
      <p className="chat__message">
        <span className="chat__name">Kookie</span>
        This is a message
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
        </p>

        <p className="chat__message">
        <span className="chat__name">Kookie</span>
        This is a message
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
        </p>

        <p className="chat__message chat__receiver">
        <span className="chat__name">Kookie</span>
        This is a message
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
        </p>
        <p className="chat__message">
        <span className="chat__name">Kookie</span>
        This is a message
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
        </p>
        <p className="chat__message">
        <span className="chat__name">Kookie</span>
        This is a message
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
        </p>
        <p className="chat__message">
        <span className="chat__name">Kookie</span>
        This is a message
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
        </p>
 <p className="chat__message">
        <span className="chat__name">Kookie</span>
        This is a message
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
        </p>
        <p className="chat__message">
        <span className="chat__name">Kookie</span>
        This is a message
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
        </p>
     </div>


     <div className="chat__footer">
      <InsertEmoticonIcon/>
      <form>
        <input placeholder="Type message" type="text"
        />
        <button type="submit">
          Send a message
        </button>
        <MicIcon/>
        
       
      </form>
     </div>
    </div>
  )
}

export default Chat
