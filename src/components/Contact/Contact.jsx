import styles from './Contact.module.css';
import { FaPhone, FaPersonBreastfeeding } from 'react-icons/fa6';

const Contact = ({ contact, onDeleteContact }) => {
  const handleDeleteClick = () => {
    onDeleteContact(contact.id);
  };

  return (
    <div className={styles.contactCard}>
      <div className={styles.text}>
        <div className={styles.textName}>
          <FaPersonBreastfeeding className={styles.icon} />
          {contact.name}
        </div>
        <div>
          <FaPhone className={styles.icon} /> {contact.number}
        </div>
      </div>
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
