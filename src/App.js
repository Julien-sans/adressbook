import React, { Component, Fragment } from 'react';
import './App.css';
import Contact from './components/Contact';
import contacts from './data/contacts';
import Sidebar from './components/Sidebar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };
  }

  toggleSidebar = () => this.setState({
    showSidebar: !this.state.showSidebar
  })

  render() {
    return (
      <div>
        <button onClick= {this.toggleSidebar}>Sidebar { this.state.showSidebar ? 'ON' : 'OFF'}</button>
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
        {
          this.state.showSidebar ? <Sidebar /> : ''
        }
      </div>
    );
  }
}

export default App;
