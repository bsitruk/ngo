import React, { Component } from "react";
import "./Project.css";
import Mybutton from "../Component/button";

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="card">
          <a
            class="img-card"
            href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
          >
            <img src={this.props.src} />
          </a>
          <div class="card-content">
            <h4 class="card-title">{this.props.title}</h4>
            <p class="goal">{this.props.goal}</p>
            <p class="activity">{this.props.activity}</p>
            <p class="participant">{this.props.participant}</p>
          </div>
          <Mybutton classes="cardBtn btn btn-default btn-lg" text="JOIN" />
        </div>
      </div>
    );
  }
}

export default Project;
