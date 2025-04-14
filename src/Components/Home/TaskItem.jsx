import React from 'react';
import styles from './styles/Tasks.module.css';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const TaskItem = ({
  task,
  editingTaskId,
  handleEdit,
  handleSave,
  handleDelete,
  handleView,
  handleChange,
}) => {
  // تحديد لون الـ badge بناءً على قيمة Priority
  const getPriorityBackgroundColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return '#ff3f61'; // أحمر فاتح
      case 'medium':
        return '#ffcc5c'; // أصفر فاتح
      case 'low':
        return '#88d8b0'; // أخضر فاتح
      default:
        return '#ffffff'; // أبيض (افتراضي)
    }
  };

  return (
    <tr key={task.id}>
      <td>
        {editingTaskId === task.id ? (
          <input
            type="text"
            value={task.name || ''}
            className={styles.inputTitle}
            onChange={(e) => handleChange(task.id, 'name', e.target.value)}
          />
        ) : (
          task.name
        )}
      </td>
      <td>
        {editingTaskId === task.id ? (
          <select
            value={task.priority || 'Medium'}
            className={styles.select}
            onChange={(e) => handleChange(task.id, 'priority', e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        ) : (
          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: getPriorityBackgroundColor(task.priority),
              color: '#000',
              padding: '10px 15px',
            }}
          >
            {task.priority}
          </span>
        )}
      </td>
      <td>
        {editingTaskId === task.id ? (
          <input
            type="date"
            value={task.date ? new Date(task.date).toISOString().slice(0, 10) : ''}
            className={styles.date}
            onChange={(e) => handleChange(task.id, 'date', e.target.value)}
          />
        ) : (
          task.date
        )}
      </td>
      <td>
        {editingTaskId === task.id ? (
          <button className={styles.editBtn} onClick={() => handleSave(task.id)}>
            <FaEdit style={{ color: 'blue' }} /> save
          </button>
        ) : (
          <button className={styles.editBtn} onClick={() => handleEdit(task.id)}>
            <FaEdit style={{ color: 'blue' }} /> edit
          </button>
        )}
      </td>
      <td>
        <button className={styles.deleteBtn} onClick={() => handleDelete(task.id)}>
          <FaTrash style={{ color: 'red' }} /> delete
        </button>
      </td>
      <td>
        <button className={styles.editBtn} onClick={() => handleView(task.id)}>
          <FaEye style={{ color: 'green' }} /> details
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;