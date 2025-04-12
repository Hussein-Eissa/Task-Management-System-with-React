import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

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
    if (e.target.classList.contains('task_modal')) {
      closeModal();
    }
  };

  return (
    <div
      className="task_modal position-fixed start-0 top-0 vh-100 vw-100 rounded overflow-hidden"
      onClick={handleBackdropClick}
    >
      <form
        className="modal-form py-4 px-4 w-50 d-flex flex-column gap-3 bg-white position-absolute top-50 start-50 translate-middle rounded shadow"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="close position-absolute top-0 end-0 m-3 border-0 bg-transparent"
          onClick={closeModal}
        >
          <FaTimes size={24}  />
        </button>

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
        <div className="d-flex flex-column gap-1">
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
        {/* وضع Select Priority و Status في نفس الصف */}
        <div className="d-flex gap-3">
          <div className="d-flex flex-column gap-1 flex-fill">
            <label htmlFor="priority" className="fw-bolder">
              Select Priority
            </label>
            <select
              className="task-effect bg-light p-2 rounded border form-select"
              name="priority"
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="d-flex flex-column gap-1 flex-fill">
            <label htmlFor="status" className="fw-bolder ">
              Status
            </label>
            <select
              className="task-effect bg-light p-2 rounded border form-select"
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
        {/* إضافة حقل Details (Textarea) */}
        <div className="d-flex flex-column gap-1">
          <label htmlFor="details" className="fw-bolder">
            Details
          </label>
          <textarea
            className="bg-light p-2 rounded border form-control"
            placeholder="Task details"
            name="details"
            id="details"
            value={newTask.details || ''} // قيمة افتراضية فارغة لو الـ details مش موجودة
            onChange={(e) => setNewTask({ ...newTask, details: e.target.value })}
            rows="3" // عدد الصفوف
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
            {newTask.keywords.length > 0 && <span>Tags: </span>}
            {newTask.keywords.map((tag, index) => (
              <div
                key={index}
                className="tag inline-block mx-1 px-2 py-1 text-sm font-medium rounded-full"
                style={{ backgroundColor: tag.color, color: '#fff' }}
              >
                {tag.text}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <button
            type="submit"
            className="border-0 w-50 rounded p-2 fw-bold w-100 fs-5 btn btn-primary"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;