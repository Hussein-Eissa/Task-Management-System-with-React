import React from "react";
import { useModal } from "./CategoryContext";
import { FaEdit, FaTrash } from "react-icons/fa";

const ItemList = () => {
  const { categories, openModal, deleteCategory } = useModal();

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
