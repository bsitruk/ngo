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
        <div className="card">
          <a
            className="img-card"
            href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
          >
            <img src={this.props.src} />
          </a>
          <div className="card-content">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="goal">{this.props.goal}</p>
            <p className="activity">{this.props.activity}</p>
            <p className="participant">{this.props.participant}</p>
          </div>
          <Mybutton classes="cardBtn btn btn-default btn-lg" text="JOIN" />
        </div>
      </div>
    );
  }
}

export default Project;
