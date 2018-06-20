
import React, { Component } from "react";
import "./component.css";

class Mybutton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="button" className={this.props.classes}>{this.props.text}</button>
        );
    }
}

export default Mybutton;