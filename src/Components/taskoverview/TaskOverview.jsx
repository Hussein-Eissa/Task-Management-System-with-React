import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./TaskOverview.css";
const TaskOverview = () => {
  const apiLink = "YOUR_API_LINK_HERE";

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "T1",
      status: "Completed",
      priority: "High",
      dueDate: "1/2/2027",
      category: "Programming",
      keywords: ["HTML", "CSS", "JS"],
    },
    {
      id: 2,
      name: "T2",
      status: "In Progress",
      priority: "Medium",
      dueDate: "15/3/2027",
      category: "Design",

      keywords: ["Figma", "UI/UX"],
    },
    {
      id: 3,
      name: "T3",
      status: "Not Started",
      priority: "Low",
      dueDate: "30/4/2027",
      category: "Testing",
      keywords: ["Selenium", "Cypress"],
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(apiLink);
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    if (apiLink && apiLink !== "YOUR_API_LINK_HERE") {
      fetchTasks();
    }
  }, [apiLink]);

  return (
    <Container fluid className="task-overview-container">
      <Button
        variant="light"
        className="go-back-btn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft style={{ marginRight: "5px" }} /> Go Back
      </Button>
      <Row className="mb-4">
        <Col>
          <h2 className="task-overview-title">Task Overview</h2>
        </Col>
      </Row>

      <Row>
        {tasks.map((task) => (
          <Col md={4} key={task.id} className="mb-4">
            <Card className="task-card">
              <Card.Body>
                <Card.Title className="task-card-title">{task.name}</Card.Title>
                <dl className="task-card-text">
                  <dt>ID:</dt>
                  <dd>{task.id}</dd>
                  <dt>Status:</dt>
                  <dd>
                    <span
                      className={
                        task.status === "Completed"
                          ? "status-completed"
                          : task.status === "In Progress"
                          ? "status-in-progress"
                          : "status-not-started"
                      }
                    >
                      {task.status}
                    </span>
                  </dd>
                  <dt>Priority:</dt>
                  <dd>
                    <span
                      className={
                        task.priority === "High"
                          ? "priority-high"
                          : task.priority === "Medium"
                          ? "priority-medium"
                          : "priority-low"
                      }
                    >
                      {task.priority}
                    </span>
                  </dd>
                  <dt>Due Date:</dt>
                  <dd>{task.dueDate}</dd>
                  <dt>Category:</dt>
                  <dd>{task.category}</dd>
                  <dt>Keywords:</dt>
                  <dd>
                    {task.keywords.map((keyword, index) => (
                      <span key={index} className="keyword-tag">
                        {keyword}
                      </span>
                    ))}
                  </dd>
                </dl>
                <Button
                  className="view-details-btn"
                  onClick={() => navigate(`/task/${task.id}`)}
                  aria-label={`View details for task ${task.name}`}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TaskOverview;
