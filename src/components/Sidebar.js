import React from 'react';



const Sidebar = ({ show }) => (
    <div style={{
      position: 'fixed',
      top: 0,
      right: show ? '0' : '-250px',
      padding: '20px',
      width: '250px',
      height: '100vh',
      background: '#eee',
      boxSizing : 'border-box',
      transition: 'right 0.5s'
    }}>
      Ma barre latérale
    </div>
)

export default Sidebar;
