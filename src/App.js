import React, { Component, Fragment } from 'react';
import './App.css';
import Contact from './components/Contact';

const contacts = [
  {
    id: 1,
    first: "Julien",
    last: "Sans",
    email: "julien.sans1@gmail.com",
    avatar: "https://www.punanaamio.fi/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm144-homer-simpson-julkkisnaamari.jpg"
  },
  {
    id: 2,
    first: "Homer",
    last: "Simpson",
    email: "julien.sans1@gmail.com",
    avatar:"https://avatars3.githubusercontent.com/u/42937081?s=460&v=4"
  }
];

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
