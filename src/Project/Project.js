import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <img class="card-img-top" src={this.props.src} alt="logo-Card" />
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.goal}</p>
          <p class="card-text">{this.props.activity}</p>
          <p class="card-text">{this.props.budget}</p>
          <a href="#" class="btn btn-primary">
            JOIN
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
