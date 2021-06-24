import React from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader
} from "reactstrap";

class Account extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className="mt-4">
          <Col md="6">
            <Card>
              <CardHeader>
                <h3><i className="fas fa-sign-in-alt mr-3"></i>Login</h3>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
          <Col md="6" className="mt-4 mt-md-0">
            <Card>
              <CardHeader>
                <h3><i className="fas fa-list-alt mr-3"></i>Register</h3>
              </CardHeader>
              <CardBody>
                <div className="todo-list">

                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Account;