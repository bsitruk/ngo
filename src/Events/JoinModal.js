import React, { Component } from "react";
import { Modal,   Grid,
  Form,
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Button } from "react-bootstrap";
import Mybutton from "../Component/button";

class JoinModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">
            {this.props.modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup controlId="formHorizontalNgo">
              <Col componentClass={ControlLabel} sm={2}>
                Who are you ?
              </Col>
              <Col sm={10}>
                <FormControl
                  type="text"
                  name="title"
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalDesc">
              <Col componentClass={ControlLabel} sm={2}>
                Description
              </Col>
              <Col sm={10}>
                <FormControl
                  componentClass="textarea"
                  placeholder="Your message..."
                  rows={8}
                  name="description"
                />
              </Col>
            </FormGroup>
          </Form>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Mybutton
            classes="btn btn-default btn-lg"
            onClick={this.props.onHide}
          >
            Send
          </Mybutton>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default JoinModal;
