import React, { Component } from "react";
import "./Event.css";
import Mybutton from "../Component/button";

class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const img_src = `assets/${this.props.activity.toLowerCase()}.jpg`;
    return (
      <div className="card__wrapper">
        <div className="card">
          <a className="img-card">
            <img src={img_src} />
            <div class="overlay">
              <div class="textOver">{this.props.activity}</div>
            </div>
          </a>
          <div className="card-content">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="goal">{this.props.description}</p>
            <p className="activity"><b>Come play some {this.props.activity.toUpperCase()} !!</b></p>
          </div>
          <div className="card__button">
            <Mybutton
              classes="btn btn-default btn-lg"
              onClick={this.props.handleClick}
            >
              JOIN US
            </Mybutton>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
