import React from 'react';
import styles from './SortControl.module.css';
import SearchBox from '../SearchBox/SearchBox';

const SortControl = ({ onSortChange, searchValue, onSearchChange }) => {
  const handleSortChange = e => {
    onSortChange(e.target.value);
  };

  return (
    <div className={styles.sortControl}>
      <SearchBox value={searchValue} onChange={onSearchChange} />
      <span className={styles.label}>Sort by:</span>
      <select className={styles.select} onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="number">Number</option>
      </select>
    </div>
  );
};

export default SortControl;
