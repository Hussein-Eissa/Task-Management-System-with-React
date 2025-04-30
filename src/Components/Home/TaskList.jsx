// TaskList.js
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, loading, handleEdit, handleDelete, handleView }) => {
  return (
    <div>
      {loading ? (
        <p style={{ fontFamily: "Cairo", fontSize: 20 }}>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p style={{ fontFamily: "Cairo", fontSize: 20 }}>No tasks available.</p>
      ) : (
        <table className="table text-center table-borderedless table-hover container-fluid">
          <thead>
            <tr className="fw-bold fs-5">
              <th>Name</th>
              <th>Category</th>
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
                key={task.id || `${task.name}-${task.category}-${task.date}`}
                task={task}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleView={handleView}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
