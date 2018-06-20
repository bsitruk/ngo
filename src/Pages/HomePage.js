import React, { Component } from "react";
import "./HomePage.css";

class HomePage extends Component {
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
                            Our mission is to connect National Government Organization's through the means of shared sporting events. Each
 NGO has the opportunity to choose between joining an existing event and creating a new event. Through our platform, relationships and friendships will be formed in the most unlikely places. 
                                <br /> Join us today! Create Unity - Change the World! :)"<br />
                                <button type="button" class="btn btn-success btn-block bigButton">Join an Event</button>
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
 <button type="button" class="btn btn-success btn-block bigButton">Create an Event</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
