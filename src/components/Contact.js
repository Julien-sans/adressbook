import React from 'react';
const imageStyle = { maxWidth: '40px' }

const Contact = ({ first, last, email, avatar, onSelectContact }) => (
  <div onClick={onSelectContact}>
    <img style={imageStyle} src={avatar} alt={ `Avatar de ${first}` } />
    <div>
      <span>{first} {last} {email}</span>
    </div>
  </div>
)

export default Contact;
