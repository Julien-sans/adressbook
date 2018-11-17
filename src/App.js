import React, { Component, Fragment } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactDetails from './components/Contactdetails';
import contacts from './data/contacts';
import Sidebar from './components/Sidebar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      showContactIndex: 0
    };
  }

  toggleSidebar = () => this.setState({
    showSidebar: !this.state.showSidebar
  })

  selectContact = index => this.setState({
    showContactIndex: index
  })

  render() {
    const { showSidebar } = this.state;
    const { showContactIndex } = this.state;
    return (
      <div>
        <button onClick= {this.toggleSidebar}>Sidebar { showSidebar ? 'ON' : 'OFF'}</button>
        {
          contacts.map((contact, index) => (
            <Contact
              key={contact.id}
              {...contact}
              onSelectContact={() => this.selectContact(index)}
            />
        ))
        }
          <ContactDetails {...contacts[showContactIndex]} />
          <Sidebar show={showSidebar} />
      </div>
    );
  }
}

export default App;
