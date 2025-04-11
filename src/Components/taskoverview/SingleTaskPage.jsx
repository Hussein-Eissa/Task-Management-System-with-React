import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./SingleTaskPage.css";

const SingleTaskPage = () => {
  const { id } = useParams();

  const task = {
    id: id || 132,
    name: "T1",
    status: "Completed",
    priority: "High",
    dueDate: "1/2/2027",
    category: "Programming",
    keywords: ["HTML", "CSS", "JS"],
    details: "",
  };

  // const apiLink = "YOUR_API_LINK_HERE"; // Replace with your actual API link

  return (
    <Container fluid className="single-task-container">
      <Card className="single-task-card">
        <div className="card-header">
          <Row className="align-items-center">
            <Col xs={6}>
              <Button
                variant="light"
                className="go-back-btn"
                onClick={() => console.log("Go Back Clicked")}
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
                <strong>Due Date:</strong> {task.dueDate}
              </p>
              <p>
                <strong>Category:</strong> {task.category}
              </p>
              <p>
                <strong>Keywords:</strong>{" "}
                {task.keywords.map((keyword, index) => (
                  <span key={index} className="keyword-tag">
                    {keyword}
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
                onClick={() => console.log("Edit Clicked")}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                className="delete-btn"
                onClick={() => console.log("Delete Clicked")}
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
