import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import NewProjectPage from "./NewProjectPage";
import ProjectListPage from "./ProjectListPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar collapseOnSelect className="header__nav">
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">N-GO</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem>
                    <Link to="/projects">Projects</Link>
                  </NavItem>
                  <NavItem eventKey={2}>
                    <Link to="/new-project">New Project</Link>
                  </NavItem>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1}>Login</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>

          <main className="App__main">
            {/* <Route exact path="/" component={Home}/> */}
            <Route path="/projects" component={ProjectListPage}/>
            <Route path="/new-project" component={NewProjectPage}/>
          </main>

          <footer id="myFooter" className="footer">
            <img className="footer__bg" src="/assets/maxresdefault.jpg" />
            <div class="container">
              <div class="row">
                <div class="col-sm-3 myCols">
                  <h5>Get started</h5>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Sign up</a>
                    </li>
                    <li>
                      <a href="#">Downloads</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-3 myCols">
                  <h5>About us</h5>
                  <ul>
                    <li>
                      <a href="#">Company Information</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-3 myCols">
                  <h5>Support</h5>
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Help desk</a>
                    </li>
                    <li>
                      <a href="#">Forums</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-3 myCols">
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
            <div class="social-networks">
              <a href="#" class="twitter">
                <i class="fa fa-twitter" />
              </a>
              <a href="#" class="facebook">
                <i class="fa fa-facebook-official" />
              </a>
              <a href="#" class="google">
                <i class="fa fa-google-plus" />
              </a>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
