import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import NewEventPage from "./Pages/NewEventPage";
import EventListPage from "./Pages/EventListPage";
import HomePage from "./Pages/HomePage";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar collapseOnSelect className="header__nav">
              <Navbar.Header>
                  <Link to="/"><img class="logo" src="assets/Logo.PNG"/></Link>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem>
                    <Link to="/events">Events</Link>
                  </NavItem>
                  <NavItem eventKey={2}>
                    <Link to="/new-event">New Event</Link>
                  </NavItem>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1}>Login</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>

          <main className="App__main">
            <Route exact path="/" component={HomePage}/> 
            <Route path="/events" component={EventListPage}/>
            <Route path="/new-event" component={NewEventPage}/>
          </main>

          <footer id="myFooter" className="footer">
            <img className="footer__bg" src="/assets/maxresdefault.jpg" />
            <div className="container">
              <div className="row">
                <div className="col-sm-3 myCols">
                  <h5>Get started</h5>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Sign Up</a>
                    </li>
                    <li>
                      <a href="#">Downloads</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3 myCols">
                  <h5>About us</h5>
                  <ul>
                    <li>
                      <a href="#">Company Information</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3 myCols">
                  <h5>Support</h5>
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Help Desk</a>
                    </li>
                    <li>
                      <a href="#">Forums</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3 myCols">
                  <h5>Legal</h5>
                  <ul>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="social-networks">
              <a href="#" className="twitter">
                <i className="fa fa-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="#" className="google">
                <i className="fa fa-google-plus" />
              </a>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
