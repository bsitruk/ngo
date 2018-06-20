import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div class="col-xs-12 col-sm-4">
                <div class="card">
                    <a class="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                        <img src={this.props.src} />
                    </a>
                    <div class="card-content">
                        <h4 class="card-title">
                            {this.props.title}

                        </h4>
                        <p class="goal">
                            {this.props.goal} {this.props.activity}
                        </p>
                        <p class="activity">
                            {this.props.activity}
                        </p>
                        <p class="participant">
                            {this.props.participant}
                        </p>
                    </div>
                    <a href="#" class="btn btn-primary">JOIN</a>
                </div>
            </div>
        );
    }
}

export default Project;
