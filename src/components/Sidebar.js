import React from 'react';

const sidebarStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  padding: '20px',
  width: '250px',
  height: '100vh',
  background: 'grey',
  //transition: 'width 
}

const Sidebar = () => {
  return(
    <div style={sidebarStyle}>
      Ma barre latérale
    </div>
  )
}

export default Sidebar;
