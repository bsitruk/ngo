import React, { Component } from "react";
import {
  Grid,
  Form,
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Checkbox,
  Button
} from "react-bootstrap";

class NewProjectPage extends Component {
  render() {
    return (
      <Grid>
          <h1>Let's create a project together !</h1>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Who are you ?
            </Col>
            <Col sm={10}>
              <FormControl type="text" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalActivity">
            <Col componentClass={ControlLabel} sm={2}>
              Activity
            </Col>
            <Col sm={10}>
              <FormControl componentClass="select" placeholder="select">
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="volley">Volley</option>
              </FormControl>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalDesc">
            <Col componentClass={ControlLabel} sm={2}>
              Description
            </Col>
            <Col sm={10}>
              <FormControl
                componentClass="textarea"
                placeholder="Description"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2}>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>{" "}
      </Grid>
    );
  }
}

export default NewProjectPage;
