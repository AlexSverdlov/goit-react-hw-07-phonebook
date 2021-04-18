import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './conponents/ContactForm';
import Filter from './conponents/Filter';
import ContactList from './conponents/ContactList.container';
import { fetchContact } from './redux/operations';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <div className="App" style={{ textAlign: 'left', margin: '20px' }}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contact</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(fetchContact()),
});

export default connect(null, mapDispatchToProps)(App);
