
import React, { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({ text: "", color: "#000000" });
    const [categories, setCategories] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    // 🟡 تحميل البيانات من API
    useEffect(() => {
        fetch("http://localhost:3000/api/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch((err) => console.error("فشل في جلب البيانات:", err));
    }, []);

    const openModal = (item = null, index = null) => {
        if (item) {
        setFormData(item);
        setEditIndex(index);
        } else {
        setFormData({ text: "", color: "#000000" });
        setEditIndex(null);
        }
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
        setFormData({ text: "", color: "#000000" });
        setEditIndex(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (editIndex !== null) {
        // تحديث في الواجهة فقط، ممكن تضيف API call هنا
        const updated = [...categories];
        updated[editIndex] = formData;
        setCategories(updated);

        // مثال لإرسال update:
        fetch(`http://localhost:3000/api/categories/${formData.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        } else {
        // إضافة جديد
        fetch("http://localhost:3000/api/categories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((newItem) => setCategories((prev) => [...prev, newItem]));
        }

        closeModal();
    };

    const deleteCategory = (index) => {
        const categoryToDelete = categories[index];

        fetch(`http://localhost:3000/api/categories/${categoryToDelete.id}`, {
        method: "DELETE",
        }).then(() => {
        setCategories((prev) => prev.filter((_, i) => i !== index));
        });
    };

    return (
        <ModalContext.Provider
        value={{
            show,
            openModal,
            closeModal,
            formData,
            handleChange,
            handleSubmit,
            categories,
            deleteCategory,
        }}
        >
        {children}
        </ModalContext.Provider>
    );
};
