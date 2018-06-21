import React, { Component } from "react";
import EventList from "../Events/EventList";
import JoinModal from "../Events/JoinModal";

class EventListPage extends Component {
  state = {
    showModal: false,
    modalTitle: ''
  };

  openModal = (title) => () => {
    this.setState({
      showModal: true,
      modalTitle: title
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <div>
        <h1>Events in Progress </h1>
        <EventList handleClick={this.openModal} />
        <JoinModal
          show={this.state.showModal}
          onHide={this.closeModal}
          modalTitle={this.state.modalTitle}
        />
      </div>
    );
  }
}

export default EventListPage;
