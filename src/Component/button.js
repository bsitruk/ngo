
import React, { Component } from "react";
import "./component.css";

class Mybutton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type={this.props.type} className={"mybutton " + this.props.classes}
                onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

export default Mybutton;
