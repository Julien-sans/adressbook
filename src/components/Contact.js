import React from 'react';

const imageStyle = { maxWidth: '40px' }
const Contact = props => (
  <div>
    <img style={imageStyle} src={props.avatar} alt={ `Avatar de ${props.first}` } />
    <div>
      <span>{props.first} {props.last} {props.email}</span>
    </div>
  </div>
)

export default Contact;
