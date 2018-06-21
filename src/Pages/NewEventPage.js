import React, { Component } from "react";
import Mybutton from "../Component/button"
import {
  Grid,
  Form,
  Col,
  ControlLabel,
  FormGroup,
  FormControl
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

class NewEventPage extends Component {
  state = {
    toEvents: false,
    title: '',
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
    const url = 'http://localhost:3001/events'
    const { title, activity, description } = this.state
    axios.post(url, {title, activity, description}).then(() =>{
      this.setState({
        toEvents: true
      })
    })
  }

  render() {
    if (this.state.toEvents) {
      return <Redirect to="/events"></Redirect>
    }
    return (
      <Grid>
      <Col smOffset={2} className = "division">
        <h1 className = "header">Create Event</h1>
        </Col>
    
          <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalNgo">
            <Col componentClass={ControlLabel} sm={2}>
              Who are you ?
            </Col>
            <Col sm={10}>
              <FormControl type="text" name='title' value={this.state.title} onChange={this.handleChange} />
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
                <option value="volleyball">Volleyball</option>
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
                rows={8}
                name='description' value={this.state.description} onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2}>
              <Mybutton classes="btn btn-lg btn-primary" type="submit">Create</Mybutton>
            </Col>
          </FormGroup>
        </Form>{" "}
      </Grid>
    );
  }
}

export default NewEventPage;
