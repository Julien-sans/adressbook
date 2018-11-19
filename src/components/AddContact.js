import React, { Component } from 'react';
import '../App.css';

class AddContact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      bio: '',
      avatar: ''
    }
  }

  handleChangeFirstName = event => {
    this.setState({
      first: event.target.value
    })
  }

  render() {
    return(
      <form>

        <label htmlFor="firstName">First name</label>
        <input onChange={this.handleChangeFirstName} type="text" id="firstName" placeholder="First name" />

        <label htmlFor="firstName">Last name</label>
        <input type="text" id="lastName" placeholder="Last name" />

        <label htmlFor="firstName">Email</label>
        <input type="email" id="email" placeholder="Email" />

        <label htmlFor="bio">Bio</label>
        <textarea id="bio" placeholder="Enter a few words about you" />

        <label htmlFor="avatar">Avatar URL</label>
        <input type="text" id="avatar" placeholder="Avatar" />

      </form>
    )
  }
}

export default AddContact;
