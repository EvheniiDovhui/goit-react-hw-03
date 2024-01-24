import styles from './SearchBox.module.css';

const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchTerm}
      onChange={e => onSearchChange(e.target.value)}
      className={styles.searchInput}
    />
  );
};

export default SearchBox;
