import React, { Component } from "react";
// import PropTypes from "prop-types";

import "./AddContactForm.css";

class AddContactForm extends Component {
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

  render() {
    return (
      <div>
        <form className="ContactManager" onSubmit={this.handleSubmit}>
          
          <p>{ this.state.error && <span>{this.state.error.message}</span> }</p>
          <input
            value={this.state.name}
            onChange={this.handleNameChange}
            placeholder="Name"
          />
          <input
            value={this.state.surname}
            onChange={this.handleSurnameChange}
            placeholder="Surname"
          />
          <button>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContactForm;
