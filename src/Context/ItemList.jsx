
import { useEffect } from "react";
import { useModal } from "./CategoryContext";
import { FaEdit, FaTrash } from "react-icons/fa";

const ItemList = () => {
  const { categories, openModal, deleteCategory } = useModal();

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .catch((err) => console.error("فشل في جلب البيانات:", err));
  }, [])

  return (
    <div className="container-fluid w-100 bg-white p-0 rounded shadow-sm mb-4">
      {categories.length === 0 && <li className="p-0 m-3 mt-1 mb-1">No Category</li>}
      <ul className="list-group p-0 m-0" style={{backgroundColor: '#f0f0f0'}}>
        {categories.map((item, index) => (
          <li
            key={index}
            className=" m-0 list-group-item d-flex justify-content-between align-items-center border-0"
          >
            <div>
              <span style={{ color: item.color }}>{item.text}</span>
            </div>
            <div>
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() => openModal(item, index)}
                style={{ backgroundColor: "white" ,border: 'none' }}
              >
                <FaEdit style={{ color: "blue" }} />
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteCategory(index)}
                style={{ backgroundColor: "white" ,border:'none'}}
              >
                <FaTrash style={{ color: "red" }} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;


