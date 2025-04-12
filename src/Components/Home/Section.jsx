// Section1.js
import React from 'react';
import styles from './styles/Section.module.css';

const Section = ({ onAddTaskClick }) => {
  return (
    <section className="d-flex flex-column p-5" style={{ width: '100%' }}>
      <div className={styles.sectionSearch}>
        <div>
          <button className={styles.addTask} onClick={onAddTaskClick}>
            Add Task
          </button>
        </div>
        <div>
          <input
            type="search"
            name=""
            id=""
            className={styles.Search}
            placeholder="search input"
          />
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Section;