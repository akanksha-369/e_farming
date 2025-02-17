import React, {useState} from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Container,
  CardHeader,
  Input,
  Card,
  CardBody
} from "reactstrap";
import Navbar from "./NavBar";

function Contact() {

  const [showMessage, setShowMessage] = useState(false); // State for message visibility

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from actually submitting (if you're not using a backend yet)
    setShowMessage(true); // Show the message
    event.target.reset(); // clears the form after submit
  };

  return (
    <div>
      <Navbar/>
      <Container style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Row style={{ marginTop: "10%" }}>
          <Card>
            <CardHeader>
              <h4 style={{marginLeft:'42%'}}>Contact Us</h4>
            </CardHeader>
            <CardBody>
              <Form style={{ marginTop: "4%" }} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="fname">First Name</Label>
                      <Input id="fname" name="fname" required/>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="lastname">Last Name</Label>
                      <Input id="lastname" name="lastname" required/>
                    </FormGroup>
                  </Col>
                </Row>
                <br />

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="contact">Phone Number</Label>
                      <Input type="number" id="contact" name="contact" required/>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="email">Email Id</Label>
                      <Input type="email" id="email" name="email" required/>
                    </FormGroup>
                  </Col>
                </Row>
                <br />

                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="message">Message</Label>
                      <Input type="textarea" id="message" name="message"  rows={5}></Input>
                    </FormGroup>
                  </Col>
                </Row>
                <button type="submit" className="btn btn-primary" style={{ marginLeft: "45%", marginTop: "5%", width: '100px' }}>
                  Submit
                </button>
                {showMessage && ( // Conditionally render the message
                  <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                    You will be contacted soon !!!
                  </p>
        )}
              </Form>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;