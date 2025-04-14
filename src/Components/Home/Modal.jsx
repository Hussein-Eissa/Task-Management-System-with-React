import React, { useState } from 'react';
import { MdOutlineTask } from "react-icons/md";

const Modal = ({ newTask, setNewTask, handleAddTask, closeModal }) => {
  const [keyword, setKeyword] = useState('');

  const tagColors = [
    '#ff6f61',
    '#ffcc5c',
    '#88d8b0',
    '#6b7280',
    '#f06292',
  ];

  const getRandomColor = () => {
    return tagColors[Math.floor(Math.random() * tagColors.length)];
  };

  const handleAddKeyword = () => {
    if (keyword.trim()) {
      setNewTask((prev) => ({
        ...prev,
        keywords: [...prev.keywords, { text: keyword, color: getRandomColor() }],
      }));
      setKeyword('');
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-bolder"><MdOutlineTask style={{color:"#6366F1",fontSize:"27"}}/> Add New Task</h5>
          </div>
          <div className="modal-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddTask();
              }}
              onClick={(e) => e.stopPropagation()}
              className="d-flex flex-column gap-3"
            >
              <div className="d-flex flex-column gap-1">
                <label htmlFor="title" className="fw-bolder">
                  Task Name
                </label>
                <input
                  className="bg-light p-2 rounded border form-control"
                  type="text"
                  placeholder="Task Name"
                  name="title"
                  id="title"
                  value={newTask.name}
                  onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                />
              </div>
              {/* وضع Category و Due Date في نفس الصف */}
              <div className="row">
                <div className="col-md-6 d-flex flex-column gap-1">
                  <label htmlFor="category" className="fw-bolder">
                    Category
                  </label>
                  <input
                    className="bg-light p-2 rounded border form-control"
                    type="text"
                    placeholder="Task category"
                    name="category"
                    id="category"
                    value={newTask.category}
                    onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column gap-1">
                  <label htmlFor="dueDate" className="fw-bolder">
                    Due Date
                  </label>
                  <input
                    className="bg-light p-2 rounded border form-control"
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    value={newTask.date}
                    onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                  />
                </div>
              </div>
              {/* وضع Select Priority و Status في نفس الصف */}
              <div className="row">
                <div className="col-md-6 d-flex flex-column gap-1">
                  <label htmlFor="priority" className="fw-bolder">
                    Select Priority
                  </label>
                  <select
                    className="bg-light p-2 rounded border form-select"
                    name="priority"
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="col-md-6 d-flex flex-column gap-1">
                  <label htmlFor="status" className="fw-bolder">
                    Status
                  </label>
                  <select
                    className="bg-light p-2 rounded border form-select"
                    name="status"
                    value={newTask.status}
                    onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                  >
                    <option value="">Select Status</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              <div className="d-flex flex-column gap-1">
                <label htmlFor="details" className="fw-bolder">
                  Details
                </label>
                <textarea
                  className="bg-light p-2 rounded border form-control"
                  placeholder="Task details"
                  name="details"
                  id="details"
                  value={newTask.details || ''}
                  onChange={(e) => setNewTask({ ...newTask, details: e.target.value })}
                  rows="3"
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <label htmlFor="keywords" className="fw-bolder">
                  Keywords
                </label>
                <input
                  className="bg-light p-2 rounded border form-control"
                  type="text"
                  placeholder="Write keywords"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                  type="button"
                  className="w-50 border-0 rounded p-2 fw-bolder mx-auto btn btn-secondary mt-2"
                  onClick={handleAddKeyword}
                >
                  Add Keywords
                </button>
                <div className="w-100 mt-2">
                  {newTask.keywords.map((tag, index) => (
                    <div
                      key={index}
                      className="d-inline-block mx-1 px-2 py-1 text-sm font-medium rounded rounded-3"
                      style={{ backgroundColor: tag.color, color: '#fff' }}
                    >
                      {tag.text}
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleAddTask}
            >
              Create Task
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;