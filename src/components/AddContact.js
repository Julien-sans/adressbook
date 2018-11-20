import React, { Component } from 'react';
import '../App.css';

class AddContact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first: 'Julien',
      last: 'Sans',
      email: '',
      bio: '',
      avatar: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { first, last, email, bio, avatar } = this.state;
    return(
      <form>

        <label htmlFor="firstName">First name</label>
        <input
          onChange={this.handleChange}
          value={first}
          type="text"
          id="firstName"
          placeholder="First name"
          name="first"
        />

        <label htmlFor="lastName">Last name</label>
        <input
          onChange={this.handleChange}
          value={last}
          type="text"
          id="lastName"
          placeholder="Last name"
          name="last"
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={this.handleChange}
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />

        <label htmlFor="bio">Bio</label>
        <textarea
          onChange={this.handleChange}
          value={bio}
          name="bio"
          id="bio"
          placeholder="Enter a few words about you" />

        <label htmlFor="avatar">Avatar URL</label>
        <input
          onChange={this.handleChange}
          value={avatar}
          name="avatar"
          type="text"
          id="avatar"
          placeholder="Avatar" />

      </form>
    )
  }
}

export default AddContact;
