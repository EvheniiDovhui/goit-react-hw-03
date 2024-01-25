import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={onChange}
      className={styles.searchInput}
    />
  );
};
export default SearchBox;
