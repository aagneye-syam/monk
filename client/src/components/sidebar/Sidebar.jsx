import React from "react";
import "./Sidebar.css"; // Import your CSS file here

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ color: "white" }}>
      <div className="sidebar-header">
        <div className="logo">MONK</div>
        <div className="inbox">Inbox</div>
      </div>
      {/* Your sidebar content here */}
      <button className="profile-button">Profile</button>
    </div>
  );
};

export default Sidebar;
