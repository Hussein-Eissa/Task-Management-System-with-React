// AddTaskButton.js
import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import styles from './styles/Tasks.module.css';

const AddTaskButton = ({ onClick }) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <button
        className={styles.editBtn}
        onClick={onClick}
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          border: 'none',
          maxWidth: '75%',
          marginBottom: '20px',
        }}
      >
        <MdAddCircleOutline /> Add Task
      </button>
    </div>
  );
};

export default AddTaskButton;