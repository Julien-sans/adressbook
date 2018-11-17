import React from 'react';
const imageStyle = { maxWidth: '100px' }

const ContactDetails = ({ first, last, email, avatar, bio }) => (
  <div style={{ paddingTop: '30px'}}>
    <img style={imageStyle} src={avatar} alt={ `Avatar de ${first}` } />
    <div>
      <h2>{first} {last}</h2>
      <div>
        <span>Email: <a href={ `mailto:${email}` }/>{email}</span>
      </div>
      <div>{bio}</div>
    </div>
  </div>
)

export default ContactDetails;
