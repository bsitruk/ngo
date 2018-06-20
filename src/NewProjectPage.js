import React, { Component } from "react";
import {
  Grid,
  Form,
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

class NewProjectPage extends Component {
  state = {
    toProjects: false,
    ngo: '',
    activity: 'football',
    description: ''
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const url = 'http://localhost:3001/projects'
    const { ngo, activity, description } = this.state
    axios.post(url, {ngo, activity, description}).then(() =>{
      this.setState({
        toProjects: true
      })
    })
  }

  render() {
    if (this.state.toProjects) {
      return <Redirect to="/projects"></Redirect>
    }
    return (
      <Grid>
          <h1>Let's create a project together !</h1>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalNgo">
            <Col componentClass={ControlLabel} sm={2}>
              Who are you ?
            </Col>
            <Col sm={10}>
              <FormControl type="text" name='ngo' value={this.state.ngo} onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalActivity">
            <Col componentClass={ControlLabel} sm={2}>
              Activity
            </Col>
            <Col sm={10}>
              <FormControl componentClass="select" placeholder="select"
              name='activity' value={this.state.activity} onChange={this.handleChange}>
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
                name='description' value={this.state.description} onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2}>
              <Button type="submit">Create</Button>
            </Col>
          </FormGroup>
        </Form>{" "}
      </Grid>
    );
  }
}

export default NewProjectPage;
