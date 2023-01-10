import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar,IconButton } from '@material-ui/core';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
     <div className='sidebar__header'>
      <Avatar src='https://upload.wikimedia.org/wikipedia/commons/9/9f/Jeon_Jungkook_at_the_White_House%2C_31_May_2022.jpg'/>
      <div className='sidebar__headerRight'>
    <IconButton>
     <DonutLargeIcon />
    </IconButton>
    <IconButton>
     <ChatIcon />
    </IconButton>
    <IconButton>
     <MoreVertIcon />
    </IconButton>
    </div>
    </div> 
    
    <div className='sidebar__search'>
      <div className='sidebar__searchContainer'>
      
       <SearchOutlined/>
   <input placeholder='Search...'type="text"/>
   </div>
   </div>
  <div className='sidebar__chats'>
    <SidebarChat />
    <SidebarChat />
    <SidebarChat /></div>
   </div>
  );
}
export default Sidebar



