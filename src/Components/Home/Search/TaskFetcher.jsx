import { useEffect } from "react";
import { useTaskContext } from "../../../Context/Taskcontext.jsx";

export default function TaskFetcher() {
  const {
    setAllTasks,
    setFilteredTasks,
    setLoading,
    setError,
  } = useTaskContext();

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3000/tasks");
        const data = await res.json();
        setAllTasks(data);
        setFilteredTasks(data);
      } catch (err) {
        setError("Failed to fetch tasks");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return null; // هذا الكمبوننت فقط لعمل fetch عند البداية
}
