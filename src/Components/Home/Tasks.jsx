import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles/Tasks.module.css';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { MdAddCircleOutline } from 'react-icons/md';
import { FaSearch } from "react-icons/fa";
import Modal from './modal';
import './styles/Modal.css';

const API_URL = 'http://localhost:3000/tasks';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    name: '',
    category: '',
    priority: 'Medium',
    date: '',
    status: '',
    keywords: [],
    details: '', // أضفنا حقل details هنا
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      toast.error('Error fetching tasks');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    setEditingTaskId(id);
  };

  const handleSave = async (id) => {
    const taskToUpdate = tasks.find((task) => task.id === id);

    if (!taskToUpdate.name || !taskToUpdate.date) {
      toast.warn('Please fill all required fields');
      return;
    }

    try {
      await axios.put(`${API_URL}/${id}`, taskToUpdate);
      toast.success('Task updated successfully');
      fetchTasks();
      setEditingTaskId(null);
    } catch (error) {
      toast.error('Error updating task');
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      toast.success('Task deleted');
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      toast.error('Error deleting task');
      console.error(error);
    }
  };

  const handleChange = (id, field, value) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, [field]: value } : task
      )
    );
  };

  const handleAddTask = async () => {
    if (
      !newTask.name ||
      !newTask.date ||
      !newTask.category ||
      !newTask.status
    ) {
      toast.warn('Please fill all required fields (Name, Category, Date, Status)');
      return;
    }

    try {
      await axios.post(API_URL, newTask);
      toast.success('Task added');
      setNewTask({
        name: '',
        category: '',
        priority: 'Medium',
        date: '',
        status: '',
        keywords: [],
        details: '', // أضفنا حقل details هنا
      });
      setIsModalOpen(false);
      fetchTasks();
    } catch (error) {
      toast.error('Error adding task');
      console.error(error);
    }
  };

  const handleView = (id) => {
    const task = tasks.find((task) => task.id === id);
    toast.info(
      `Viewing task: ${task.name}\nPriority: ${task.priority}\nDate: ${task.date}`
    );
  };
  // const navigate = useNavigate();

  // const handleView = (taskId) => {
  //   // الانتقال إلى صفحة التفاصيل مع تمرير معرف المهمة
  //   navigate(`/tasks/${taskId}`, { 
  //     state: { from: 'tasks-list' } // بيانات إضافية اختيارية
  //   });
  // };


  return (
    <div>
      <ToastContainer />
      <div>
      {/* <div className="d-flex justify-content-center py-3">
          <input
            type="search"
            className="form-control w-75 m-3 p-2"
            placeholder="Search...."
            style={{fontFamily: 'Cairo', fontSize: 20}}
            

          />
          <FaSearch />
        </div> */}
        <div className="d-flex justify-content-center mt-4">
          <button
            className={styles.editBtn}
            onClick={() => setIsModalOpen(true)}
            style={{ fontWeight: 'bold', fontSize: 20, border: 'none',maxWidth: '75%',marginBottom: "20px "}}
          >
            <MdAddCircleOutline /> Add Task
          </button>
        </div>

        {isModalOpen && (
          <Modal
            newTask={newTask}
            setNewTask={setNewTask}
            handleAddTask={handleAddTask}
            closeModal={() => setIsModalOpen(false)}
            
          />
        )}
      </div>
      <div>
        



        {loading ? (
          <p style={{fontFamily: 'Cairo', fontSize: 20}}>Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p style={{fontFamily: 'Cairo', fontSize: 20}} >No tasks available.</p>
        ) : (
          <table className="table table-bordered text-center">
            <thead>
              <tr>
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
                <tr key={task.id}>
                  <td>
                    {editingTaskId === task.id ? (
                      <input
                        type="text"
                        value={task.name || ''}
                        className={styles.inputTitle}
                        onChange={(e) =>
                          handleChange(task.id, 'name', e.target.value)
                        }
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
                        onChange={(e) =>
                          handleChange(task.id, 'priority', e.target.value)
                        }
                      >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    ) : (
                      task.priority
                    )}
                  </td>
                  <td>
                    {editingTaskId === task.id ? (
                      <input
                        type="date"
                        value={
                          task.date
                            ? new Date(task.date).toISOString().slice(0, 10)
                            : ''
                        }
                        className={styles.date}
                        onChange={(e) =>
                          handleChange(task.id, 'date', e.target.value)
                        }
                      />
                    ) : (
                      task.date
                    )}
                  </td>
                  <td>
                    {editingTaskId === task.id ? (
                      <button
                        className={styles.editBtn}
                        onClick={() => handleSave(task.id)}
                      >
                        <FaEdit style={{ color: 'blue' }} /> save
                      </button>
                    ) : (
                      <button
                        className={styles.editBtn}
                        onClick={() => handleEdit(task.id)}
                      >
                        <FaEdit style={{ color: 'blue' }} /> edit
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDelete(task.id)}
                    >
                      <FaTrash style={{ color: 'red' }} /> delete
                    </button>
                  </td>
                  <td>
                    <button
                      className={styles.editBtn}
                      onClick={() => handleView(task.id)}
                    >
                      <FaEye style={{ color: 'green' }} /> details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Tasks;







