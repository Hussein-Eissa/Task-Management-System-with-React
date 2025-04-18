import { useTaskContext } from "../../../Context/Taskcontext.jsx";
import { useState } from "react";

export default function TaskSearch() {
  const { allTasks, setFilteredTasks } = useTaskContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = allTasks.filter((task) =>
      task.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredTasks(value.trim() === "" ? allTasks : filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}
