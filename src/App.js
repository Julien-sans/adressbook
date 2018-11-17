import React, { Component, Fragment } from 'react';
import './App.css';
import Contact from './components/Contact';
import contacts from './data/contacts';

class App extends Component {
  render() {
    return (
      <div>
        {
          contacts.map(contact => {
            return(
            <Contact
              key={contact.id}
              {...contact}
            />
          )
          })
        }
      </div>
    );
  }
}

export default App;
