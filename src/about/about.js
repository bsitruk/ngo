import React, { Component } from "react";
import "./about.css";

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="row text-center quotebox">
                        <div class=" quote col-md-6">

                            <p class="quoteCeo">
                            N-GO
 has the goal to connect and organize meetings with different NGO around different sport activities.Each
 NGO joinning us has the opportunity to choose between join a project already existing or come with a new idea.Our
 goal is to unify and connect people with different differences through the sport acitivty because sport is the only thing with war able to create such nation unify.
                                <br /> Join us! Create Unity - Change the World! :)"<br />
                                <button type="button" class="btn btn-success btn-block bigButton">Join a project</button>
                                </p>

                        </div>
                        <div class="col-md-6">
                            <div class="picture">
                                <img class="football" src="http://www.whoateallthepies.tv/wp-content/uploads/2014/06/PA-19485339.jpg" />
                            </div>
                        </div>
                    </div>

                    <div class="row mapathonOk">
                        <div class="col-md-6 mapathonpic"></div>
                        <div class="col-md-6">
                            <p class="rightbox">
                            “We
 become not a melting pot but a beautiful mosaic. Different people, different beliefs, different yearnings, different hopes, different dreams.”
 <button type="button" class="btn btn-success btn-block bigButton">Create a project</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;