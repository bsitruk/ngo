import React, { Component } from 'react';
import EventList from '../Events/EventList';
import "./EventListPage.css"

class EventListPage extends Component {
  render() {
    return (
      <div>
      <div class = "division">
      	<h1 class = "header">Events in Progress </h1>
      	</div>
        <EventList></EventList>

      </div>
    );
  }
}

export default EventListPage;
