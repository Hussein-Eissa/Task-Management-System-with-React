import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTaskButton from "./AddTaskButton";
import TaskList from "./TaskList";
import Modal from "./Modal";
import Filters from "./Filters";
import "../../styles/home/Modal.css";

const API_URL = "http://localhost:3000/api/tasks";

const Tasks = ({ searchQuery }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // State لتحديد إذا كنا في وضع التعديل
  const [taskToEdit, setTaskToEdit] = useState(null); // State لتخزين بيانات المهمة اللي هنعدلها
  const [newTask, setNewTask] = useState({
    name: "",
    category: "",
    priority: "Medium",
    date: "",
    status: "",
    keywords: [],
    details: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add effect to handle search and filters
  useEffect(() => {
    if (tasks.length > 0) {
      let filtered = [...tasks];

      // Apply search filter
      if (searchQuery && searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          (task) =>
            task.name.toLowerCase().includes(query) ||
            task.category.toLowerCase().includes(query) ||
            (task.details && task.details.toLowerCase().includes(query))
        );
      }

      setFilteredTasks(filtered);
    }
  }, [searchQuery, tasks]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
      setFilteredTasks(response.data);
    } catch (error) {
      toast.error("Error fetching tasks");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filters) => {
    let filtered = [...tasks];

    if (filters.status) {
      filtered = filtered.filter((task) => task.status === filters.status);
    }

    if (filters.priority) {
      filtered = filtered.filter((task) => task.priority === filters.priority);
    }

    if (filters.date) {
      filtered = filtered.filter((task) => task.date === filters.date);
    }

    // Apply search filter
    if (searchQuery && searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (task) =>
          task.name.toLowerCase().includes(query) ||
          task.category.toLowerCase().includes(query) ||
          (task.details && task.details.toLowerCase().includes(query))
      );
    }

    setFilteredTasks(filtered);
  };

  const handleEdit = (task) => {
    setIsEditing(true); // تفعيل وضع التعديل
    setTaskToEdit(task); // تخزين بيانات المهمة
    setNewTask(task); // ملء الحقول في الـ Modal ببيانات المهمة
    setIsModalOpen(true); // فتح الـ Modal
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      toast.success("Task deleted");
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      toast.error("Error deleting task");
      console.error(error);
    }
  };

  const handleAddTask = async () => {
    if (
      !newTask.name ||
      !newTask.date ||
      !newTask.category ||
      !newTask.status
    ) {
      toast.warn(
        "Please fill all required fields (Name, Category, Date, Status)"
      );
      return;
    }

    try {
      await axios.post(API_URL, newTask);
      toast.success("Task added");
      setNewTask({
        name: "",
        category: "",
        priority: "Medium",
        date: "",
        status: "",
        keywords: [],
        details: "",
      });
      setIsModalOpen(false);
      fetchTasks();
    } catch (error) {
      toast.error("Error adding task");
      console.error(error);
    }
  };

  const handleUpdateTask = async () => {
    if (
      !newTask.name ||
      !newTask.date ||
      !newTask.category ||
      !newTask.status
    ) {
      toast.warn(
        "Please fill all required fields (Name, Category, Date, Status)"
      );
      return;
    }

    try {
      await axios.put(`${API_URL}/${taskToEdit._id}`, newTask);
      toast.success("Task updated successfully");
      setNewTask({
        name: "",
        category: "",
        priority: "Medium",
        date: "",
        status: "",
        keywords: [],
        details: "",
      });
      setIsModalOpen(false);
      setIsEditing(false);
      setTaskToEdit(null);
      fetchTasks();
    } catch (error) {
      toast.error("Error updating task");
      console.error(error);
    }
  };

  const handleView = (id) => {
    navigate(`/task/${id}`);
  };

  return (
    <div>
      <ToastContainer />
      <Filters onFilterChange={handleFilterChange} />
      <AddTaskButton onClick={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <Modal
          newTask={newTask}
          setNewTask={setNewTask}
          handleAddTask={handleAddTask}
          handleUpdateTask={handleUpdateTask}
          closeModal={() => {
            setIsModalOpen(false);
            setIsEditing(false);
            setTaskToEdit(null);
            setNewTask({
              name: "",
              category: "",
              priority: "Medium",
              date: "",
              status: "",
              keywords: [],
              details: "",
            });
          }}
          isEditing={isEditing}
        />
      )}

      <TaskList
        tasks={filteredTasks}
        loading={loading}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleView={handleView}
      />
    </div>
  );
};

export default Tasks;
