// src/MyModal.js
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useModal } from "../../Context/CategoryContext";

const MyModal = () => {
    const {
        show,
        closeModal,
        formData,
        handleChange,
        handleSubmit,
    } = useModal();

    return (
        <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group controlId="textInput">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                type="text"
                placeholder="Please enter text"
                name="text"
                value={formData.text}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="colorInput" className="mt-3">
                <Form.Label>Category Color</Form.Label>
                <Form.Control
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Save
            </Button>
        </Modal.Footer>
        </Modal>
    );
};

export default MyModal;
