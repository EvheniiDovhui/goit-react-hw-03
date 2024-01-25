import React, { useState } from 'react';
import styles from './App.module.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SortControl from './SortControl/SortControl';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [searchValue, setSearchValue] = useState('');
  const [sortField, setSortField] = useState('name');

  const handleSearchChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSortChange = field => {
    setSortField(field);
  };

  const isContactExists = (name, number) => {
    return contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
  };

  const addContact = newContact => {
    if (!isContactExists(newContact.name, newContact.number)) {
      setContacts(prevContacts => [...prevContacts, newContact]);
    } else {
      alert('Contact with the same name or number already exists.');
    }
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = contacts
    .filter(
      contact =>
        contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        contact.number.includes(searchValue)
    )
    .sort((a, b) => (a[sortField] > b[sortField] ? 1 : -1));

  return (
    <div className={styles.box}>
      <ContactForm onAddContact={addContact} />
      <SortControl
        onSortChange={handleSortChange}
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
      />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
