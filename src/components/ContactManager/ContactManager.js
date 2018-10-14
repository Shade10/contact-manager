import React, { Component } from "react";
// import PropTypes from "prop-types";
import AddContactForm from "../AddContactForm";

import "./ContactManager.css";

class ContactManager extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem("contacts") || "[]")
  };

  addContact = (name, surname) => {
    this.setState({
      contacts: this.state.contacts.concat({
        id: Date.now(),
        name: name,
        surname: surname
      })
    });
  };

  chengeContact = (name, surname) => {
    this.setState({
      contacts: this.state.contacts({
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

  editContact = (name, surname, contactId) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contactId !== contact.id).map((name, surname) => {
        return(
          <form>
            <input
            value={name}
            onChange={this.chengeContact(name)}
            placeholder="Name"
          />
          <input
            value={this.state.surname}
            onChange={this.chengeContact(surname)}
            placeholder="Surname"
          />
          </form>
        )
      } )
    });
  };


  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
  

  render() {
    return (
      <div>
        <h1>Contact Manager</h1>
        <AddContactForm addContactFunction={this.addContact} />

        <div className="contactsContainer">
          <h1>Contacts List</h1>
          {this.state.contacts.map(contact => (
            <div key={contact.id}>
              <p>{`Name: ${contact.name}`}</p>
              <p>{`Surname: ${contact.surname}`}</p>
              <button
                className="contact-button"
                onClick={() => this.removeContact(contact.id)}
              >
                Remove
              </button>
              <button
                className="contact-button"
                onClick={() => this.this.editContact(contact.name, contact.surname, contact.id)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ContactManager;
