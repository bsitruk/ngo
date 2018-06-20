import React, { Component } from "react";
import "./about.css";
import Mybutton from "../Component/button.js" ;

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
                            Our mission is to connect National Government Organization's through the means of shared sporting events. Each
 NGO has the opportunity to choose between joining an existing event and creating a new event. Through our platform, relationships and friendships will be formed in the most unlikely places. 
                                <br /> Join us today! Create Unity - Change the World! :)"<br /><br/>
                                <Mybutton classes="btn btn-primary btn-lg active">Join an Event</Mybutton>
                                </p>

                        </div>
                        <div class="col-md-6">
                            <div class="picture">
                                <img class="football" src="http://blogs.reuters.com/photographers-blog/files/2014/05/34Q9295xx.jpg" />
                            </div>
                        </div>
                    </div>

                    <div class="row mapathonOk">
                        <div class="col-md-6 mapathonpic">
                        <div class="picture">
                                <img class="football" src="http://wp.patheos.com.s3.amazonaws.com/blogs/paperbacktheology/files/2013/06/playing-baseball.jpg" />
                            </div>
                            </div>

                        <div class="col-md-6">
                            <p class="rightbox">
                            “We
 become not a melting pot but a beautiful mosaic. Different people, different beliefs, different yearnings, different hopes, different dreams.”
 <br/><br/><Mybutton classes ="btn btn-primary btn-lg active">Create an Event</Mybutton>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
