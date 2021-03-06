import React, { Component, Fragment } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactDetails from './components/Contactdetails';
import contacts from './data/contacts';
import Sidebar from './components/Sidebar';
import './App.css'
import AddContact from './components/AddContact';

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
    const { showSidebar, showContactIndex } = this.state;
    return (
      <div className="App">
        <button className="toggle" onClick= {this.toggleSidebar}>Sidebar { showSidebar ? 'ON' : 'OFF'}</button>
        {
          contacts.map((contact, index) => (
            <Contact
              key={contact.id}
              {...contact}
              selected={index === showContactIndex}
              onSelectContact={() => this.selectContact(index)}
            />
          ))
        }
        <ContactDetails {...contacts[showContactIndex]} />
        <Sidebar show={showSidebar} />
        <AddContact />
      </div>
    );
  }
}

export default App;
