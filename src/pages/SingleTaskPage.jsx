import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/singleTask/SingleTaskPage.css";

const SingleTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        console.error("Error fetching task:", error);
        // If task not found, use default data
        setTask({
          id: id,
          name: "Task " + id,
          status: "Not Started",
          priority: "Medium",
          dueDate: new Date().toLocaleDateString(),
          category: "General",
          keywords: [],
          details: "No details available",
        });
      }
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      toast.success("Task deleted successfully");
      navigate(-1); // Go back to previous page
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid className="single-task-container">
      <Card className="single-task-card">
        <div className="card-header">
          <Row className="align-items-center">
            <Col xs={6}>
              <Button
                variant="light"
                className="go-back-btn"
                onClick={() => navigate(-1)}
              >
                <FaArrowLeft style={{ marginRight: "5px" }} /> Go Back
              </Button>
            </Col>
            <Col xs={6} className="text-end">
              <h3 className="card-title">Task Details</h3>
            </Col>
          </Row>
        </div>

        <Card.Body className="card-body">
          <Row>
            <Col md={6}>
              <p>
                <strong>ID:</strong> {task.id}
              </p>
              <p>
                <strong>Name:</strong> {task.name}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={
                    task.status === "Completed"
                      ? "status-completed"
                      : "status-not-completed"
                  }
                >
                  {task.status}
                </span>
              </p>
              <p>
                <strong>Priority:</strong>{" "}
                <span
                  className={
                    task.priority === "High"
                      ? "priority-high"
                      : "priority-not-high"
                  }
                >
                  {task.priority}
                </span>
              </p>
            </Col>
            <Col md={6}>
              <p>
                <strong>Due Date:</strong>{" "}
                {task.date || task.dueDate || "No date available"}
              </p>
              <p>
                <strong>Category:</strong> {task.category}
              </p>
              <p>
                <strong>Keywords:</strong>{" "}
                {task.keywords &&
                  task.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="keyword-tag"
                      style={{
                        backgroundColor: keyword.color || "#a3bffa",
                        color: "#fff",
                      }}
                    >
                      {keyword.text || keyword}
                    </span>
                  ))}
              </p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p>
                <strong>Details:</strong>{" "}
                {task.details || "No details available"}
              </p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="d-flex justify-content-between">
              <Button
                className="edit-btn"
                onClick={() => navigate(`/task/${id}/edit`)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                className="delete-btn"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleTaskPage;
