import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Event from "./Event";
import axios from 'axios'

class EventList extends Component {
  state = {
    events: []
  }

  componentDidMount() {
    const url = 'http://localhost:3001/events'
    axios.get(url).then(events => {
      this.setState({
        events: events.data
      })
    })
  }

  render() {
    if (!this.state.events.length) {
      return <p>Loading...</p>
    }
    return (
      <Grid>
        <Row className="show-grid display-flex">
          {this.state.events.map(event => (
            <Col xs={12} md={4} key={event.id}>
              <Event {...event} handleClick={this.props.handleClick(event.title)} />
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default EventList;
