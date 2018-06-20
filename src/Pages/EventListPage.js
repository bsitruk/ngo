import React, { Component } from 'react';
import EventList from '../Events/EventList';

class EventListPage extends Component {
  render() {
    return (
      <div>
        <h1>Events in Progress </h1>
        <EventList></EventList>
      </div>
    );
  }
}

export default EventListPage;
