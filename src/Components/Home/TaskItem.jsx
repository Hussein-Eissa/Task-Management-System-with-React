import React, { useState } from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import styles from '../../styles/home/Tasks.module.css';

const TaskItem = ({
  task,
  handleEdit, // دالة جديدة هتفتح الـ Modal مع بيانات المهمة
  handleDelete,
  handleView,
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

  // State للتحكم في ظهور الـ Modal بتاع التأكيد للحذف
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // فتح الـ Modal
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  // إغلاق الـ Modal
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  // تأكيد الحذف
  const confirmDelete = () => {
    handleDelete(task.id); // تنفيذ دالة الحذف
    handleCloseDeleteModal(); // إغلاق الـ Modal
  };

  return (
    <>
      <tr key={task.id}>
        <td>{task.name}</td>
        <td>
          <span className="badge rounded-pill"
            style={{ backgroundColor: '#3ee6bc', color: '#000', padding: '10px 15px', borderRadius: '10px' }}>
            {task.category}
          </span>
        </td>
        <td>
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
        </td>
        <td>{task.date}</td>
        <td>
          <button className={styles.editBtn} onClick={() => handleEdit(task)}>
            <FaEdit style={{ color: 'blue' }} />
          </button>
        </td>
        <td>
          <button className={styles.deleteBtn} onClick={handleShowDeleteModal}>
            <FaTrash style={{ color: 'red' }} />
          </button>
        </td>
        <td>
          <button className={styles.editBtn} onClick={() => handleView(task.id)}>
            <FaEye style={{ color: 'green' }} /> details
          </button>
        </td>
      </tr>

      {/* Modal التأكيد بتاع الحذف */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the task "{task.name}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            No
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskItem;



































// import React from 'react';
// import styles from './styles/Tasks.module.css';
// import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

// const TaskItem = ({
//   task,
//   editingTaskId,
//   handleEdit,
//   handleSave,
//   handleDelete,
//   handleView,
//   handleChange,
// }) => {
//   // تحديد لون الـ badge بناءً على قيمة Priority
//   const getPriorityBackgroundColor = (priority) => {
//     switch (priority?.toLowerCase()) {
//       case 'high':
//         return '#ff3f61'; // أحمر فاتح
//       case 'medium':
//         return '#ffcc5c'; // أصفر فاتح
//       case 'low':
//         return '#88d8b0'; // أخضر فاتح
//       default:
//         return '#ffffff'; // أبيض (افتراضي)
//     }
//   };

//   return (
//     <tr key={task.id}>
//       <td>
//         {editingTaskId === task.id ? (
//           <input
//             type="text"
//             value={task.name || ''}
//             className={styles.inputTitle}
//             onChange={(e) => handleChange(task.id, 'name', e.target.value)}
//           />
//         ) : (
//           task.name
//         )}
//       </td>
//       <td>
//         {editingTaskId === task.id ? (
//           <select
//             value={task.priority || 'Medium'}
//             className={styles.select}
//             onChange={(e) => handleChange(task.id, 'priority', e.target.value)}
//           >
//             <option value="High">High</option>
//             <option value="Medium">Medium</option>
//             <option value="Low">Low</option>
//           </select>
//         ) : (
//           <span
//             className="badge rounded-pill"
//             style={{
//               backgroundColor: getPriorityBackgroundColor(task.priority),
//               color: '#000',
//               padding: '10px 15px',
//             }}
//           >
//             {task.priority}
//           </span>
//         )}
//       </td>
//       <td>
//         {editingTaskId === task.id ? (
//           <input
//             type="date"
//             value={task.date ? new Date(task.date).toISOString().slice(0, 10) : ''}
//             className={styles.date}
//             onChange={(e) => handleChange(task.id, 'date', e.target.value)}
//           />
//         ) : (
//           task.date
//         )}
//       </td>
//       <td>
//         {editingTaskId === task.id ? (
//           <button className={styles.editBtn} onClick={() => handleSave(task.id)}>
//             <FaEdit style={{ color: 'blue' }} /> save
//           </button>
//         ) : (
//           <button className={styles.editBtn} onClick={() => handleEdit(task.id)}>
//             <FaEdit style={{ color: 'blue' }} /> edit
//           </button>
//         )}
//       </td>
//       <td>
//         <button className={styles.deleteBtn} onClick={() => handleDelete(task.id)}>
//           <FaTrash style={{ color: 'red' }} /> delete
//         </button>
//       </td>
//       <td>
//         <button className={styles.editBtn} onClick={() => handleView(task.id)}>
//           <FaEye style={{ color: 'green' }} /> details
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default TaskItem;