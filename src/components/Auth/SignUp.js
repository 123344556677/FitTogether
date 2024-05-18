import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import "./Auth.css";
import { signupInputs } from "assets/Mock_Data/FormData";

const SignUp = () => {
  return (
    <div>
      <Row className="justify-content-center w-100 mt-4">
        <Col xl={4}>
          <Card className="p-3 card-shadow mb-4">
            <h1 className="text-center">SignUp</h1>
            <p className="login-text mt-2 text-center mb-0">
              Explore your personalized fitness experience! 
            </p>
            <hr/>
            <Form role="form" className="mt-1 p-1">
              {signupInputs?.map((data, index) => (
                <FormGroup key={index}>
                  <InputGroup className="input-group-alternative mb-3 signup-input">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className={data?.icon} />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder={data?.placeholder}
                      type={data?.type}
                      name={data?.name}
                      required
                    />
                  </InputGroup>
                </FormGroup>
              ))}
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button
                  className="mt-4 auth-button signUp-button-color"
                  color="primary"
                  type="button"
                >
                  Create Account
                </Button>
                <p className="signup-text mt-2">
                  Already hav an account?
                  <a className="login-link ml-1" href="/login">
                    Login
                  </a>
                </p>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
      <Container />
    </div>
  );
};

export default SignUp;
