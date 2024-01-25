import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {/* Fix: Correct placement of FaPhone */}
          <Contact contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
