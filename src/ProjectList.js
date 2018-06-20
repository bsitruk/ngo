import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Project from "./Project/Project";

let projects = [
  {
    title: "my project",
    goal: "description",
    activity: "activity",
    participant:"participant"
  },
  {
    title: "my project",
    goal: "description",
    activity: "activity",
    participant:"participant"
  },
  {
    title: "my project",
    goal: "description",
    activity: "activity",
    participant:"participant"
  },
  {
    title: "my project",
    goal: "description",
    activity: "activity",
    participant:"participant"
  }
];

class ProjectList extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          {projects.map(project => (
            <Col xs={12} md={4}>
              <Project {...project} />
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default ProjectList;
