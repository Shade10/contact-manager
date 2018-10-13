import React, { Component } from "react";
import PropTypes from "prop-types";

import "./EditContact.css";

class EditContact extends Component {
  static propTypes = {};

  state = {
    name: "",
    surname: "",
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name === "" || this.state.surname === "") {
      this.setState({
        error: new Error("Fields can't be empty")
      });
      return;
    }
    this.props.addContactFunction(this.state.name, this.state.surname);
    this.setState({ name: '', surname: '', error: null });
  };

  handleNameChange = event => {
    if (event.target.value.match(/^[A-Za-z]+$/i)) {
      this.setState({
        name: event.target.value
      });
    } else {
      return this.setState({ error: new Error("Only letters are allowed") });
    }
  };

  handleSurnameChange = event => {
    if (event.target.value.match(/^[A-Za-z]+$/i)) {
      this.setState({
        surname: event.target.value
      });
    } else {
      return this.setState({ error: new Error("Only letters are allowed") });
    }
  };
  
  chengeContact = (name, surname) => {
    this.setState({
      contacts: this.state.contacts.concat({
        name: name,
        surname: surname
      })
    });
  };

  removeContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contactId !== contact.id)
    });
  };

  editContact = (name, surname) => {};

  render() {
    return (
      <div className="EditContact">
        <form className="ContactManager" onSubmit={this.chengeContact}>
          <p>{this.state.error && <span>{this.state.error.message}</span>}</p>
          <input
            value={this.state.name}
            onChange={this.chengeContact}
            placeholder="Name"
          />
          <input
            value={this.state.surname}
            onChange={this.chengeContact}
            placeholder="Surname"
          />
          <button>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
