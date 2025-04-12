import React, { useState } from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';
import styles from './styles/Section.module.css'; // تأكد من تعديل المسار حسب هيكل مشروعك

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className={ styles.navbar}>
      
      <div className={styles.navLeft}>
        <div className={styles.logo}>
          
          <span className={styles.logoIcon}>✓</span>
          <span className={styles.logoText}>TaskManager</span>
        </div>
        <button className={styles.menuButton}>
          <FiMenu size={20} />
        </button>
      </div>

      
      <div className={styles.searchBar}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;