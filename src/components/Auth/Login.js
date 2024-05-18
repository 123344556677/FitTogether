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
import { loginInputs } from "assets/Mock_Data/FormData";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Row className="justify-content-center w-100 mt-4">
        <Col xl={4}>
          <Card className="p-3 card-shadow " style={{ height: "500px" }}>
            <h1 className="text-center">Login</h1>
            <p className="login-text mt-2 mb-0 text-center">
              Welcome back to sign in to your account!
            </p>
            <hr />
            <Form role="form" className="mt-2 p-1">
              {loginInputs?.map((data, index) => (
                <FormGroup key={index}>
                  <InputGroup className="input-group-alternative mb-3 login-input">
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
                <Col xs="6">
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
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                </Col>
                <Col xs="6" className="text-right">
                  <span
                    className="text-muted"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/forgetPassword")}
                  >
                    Forgot Password?
                  </span>
                </Col>
              </Row>
              <div className="text-center">
                <Button
                  className="mt-5 login-button-color auth-button"
                  color="primary"
                  type="button"
                  onClick={() => navigate("/user/home")}
                >
                  Sign in to your account
                </Button>
                <p className="signup-text mt-2">
                  Don't have an account?{" "}
                  <a className="signup-link" href="/signup">
                    Sign up
                  </a>
                </p>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
