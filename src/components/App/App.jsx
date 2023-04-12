import { Component } from 'react';
import { nanoid } from 'nanoid';

import Contact from '../Contacts';

export class App extends Component {
  nameInputId = nanoid();
  contactId = nanoid();
  state = {
    contacts: [],
    name: '',
  };

  onSubmitContact = e => {
    e.preventDefault();
    this.setState(prevState => {
      console.log(prevState);
    });
  };

  habdleInputChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form action="" onSubmit={this.onSubmitContact}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            id={this.nameInputId}
            type="text"
            value={this.state.name}
            onChange={this.habdleInputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <Contact />
      </>
    );
  }
}
