import { useEffect, useState } from "react";
import { useModal } from "./CategoryContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import CategoryModal from "../Components/Home/CategoryModal";

const ItemList = () => {
  const { openModal, deleteCategory } = useModal();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("فشل في جلب البيانات:", err));
  }, [])



  return (
    <div className="container">
      {categories.length === 0 && <p className="d-none">No Category</p>}
      <ul className="list-group">
        {categories.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <span style={{ color: item.color }}>{item.text}</span>
            </div>
            <div>
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() => openModal(item, index)}
                style={{ backgroundColor: "white" }}
              >
                <FaEdit style={{ color: 'blue' }} />
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteCategory(index)}
                style={{ backgroundColor: "white" }}
              >
                <FaTrash style={{ color: 'red' }} />
              </button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ItemList;
