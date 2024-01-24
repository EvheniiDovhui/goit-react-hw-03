import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  const handleDeleteClick = () => {
    onDeleteContact(contact.id);
  };

  return (
    <div className={styles.contactCard}>
      <span>
        {contact.name} - {contact.number}
      </span>
      <button
        type="button"
        onClick={handleDeleteClick}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
