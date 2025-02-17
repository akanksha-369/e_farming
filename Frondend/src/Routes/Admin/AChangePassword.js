import React from "react";
import AdminSideBar from "../../Components/AdminSideBar";

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

const AChangePassword = () => {
  const containerStyle = {
    padding: "20px",
    width: "60%",
    margin: "4% 14%",
  };
  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <div className="Container" style={containerStyle}>
        <Card>
          <CardHeader
            style={{
              fontSize: "30px",
              backgroundColor: "grey",
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
                  backgroundColor: "grey",
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

export default AChangePassword;
