// TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({
  tasks,
  loading,
  editingTaskId,
  handleEdit,
  handleSave,
  handleDelete,
  handleView,
  handleChange,
}) => {
  return (
    <div>
      {loading ? (
        <p style={{ fontFamily: 'Cairo', fontSize: 20 }}>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p style={{ fontFamily: 'Cairo', fontSize: 20 }}>No tasks available.</p>
      ) : (
        <table className="table table-bordered text-center">
          <thead>
            <tr className="fw-bold fs-5">
              <th>Name</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                editingTaskId={editingTaskId}
                handleEdit={handleEdit}
                handleSave={handleSave}
                handleDelete={handleDelete}
                handleView={handleView}
                handleChange={handleChange}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;