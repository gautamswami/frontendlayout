import React from "react";
import './sidebar.css'
export default function SideBar() {
  return (
    <div className="sidebar_container">
      <div className="sidebar_logo">
        <img className="sidebar_logo_img" src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg'/>
        <h1 className="sidebar_logo_text">Stealth</h1>
      </div>
      <div className="sidebar_content_container">
        <div className="sidebar_content">
          <img className="sidebar_content_img" src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg'/>
          <p className="sidebar_content_text">File Manager</p>
        </div>
      </div>
    </div>
  );
}