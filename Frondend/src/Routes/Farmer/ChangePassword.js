import React from "react";
import FarmerSidebar from "../../Components/FarmerSideBar";

import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

const ChangePassword = () => {
  const containerStyle = {
    padding: "20px",
    width: "60%",
    margin: "4% 14%",
  };
  return (
    <div style={{ display: "flex" }}>
      <FarmerSidebar />
      <div className="Container" style={containerStyle}>
        <Card>
          <CardHeader
            style={{
              fontSize: "30px",
              backgroundColor: "#146ca4",
              color: "white",
            }}
          >
            <b style={{ marginLeft: "35%" }}>Change Password</b>
          </CardHeader>
          <CardBody>
            <Form>
              <Row style={{ marginTop: "5%" }}>
                <Col md={6}>
                  <FormGroup>
                    <Label for="opsw">Old Password</Label>
                    <Input type="password" id="opsw" name="opsw" />
                  </FormGroup>
                </Col>
              </Row>
              <br />

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="npsw">New Password</Label>
                    <Input type="password" id="npsw" name="npsw" />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="cpsw">Confirm Password</Label>
                    <Input type="password" id="cpsw" name="cpsw" />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <Button
                style={{
                  marginLeft: "43%",
                  marginTop: "5%",
                  width: "15%",
                  backgroundColor: "#146ca4",
                }}
              >
                Set Password
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ChangePassword;
