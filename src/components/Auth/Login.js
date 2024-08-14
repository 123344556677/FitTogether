import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "reactstrap";
import "./Auth.css";
import { loginInputs } from "assets/Mock_Data/FormData";
import { useNavigate } from "react-router-dom";
import MotionWrapper from "components/FramerMotion/FramerMotion";
import DynamicInput from "components/DynamicInputs/DynamicInputs";
import { login } from "Api/Api";
import { setLocalStorage } from "DynamicFunctions";

const Login = () => {
  const [formValues, setFormValues] = useState(
    loginInputs.reduce((acc, input) => {
      acc[input.name] = input.value || "";
      return acc;
    }, {})
  );
  const navigate = useNavigate();
  const slideVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.6 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    const values = {
      email: formValues?.email,
      password: formValues?.password,
    };
    const response = await login(values);
    console.log(response, "response---->values");
    if(response){
    setLocalStorage("token", response.data?.data?.token);
    setLocalStorage("id", response.data?.data?._id);
    if (response?.data?.data?.userType === "user") {
      window.location.assign("/user/home");
    }
    if (response?.data?.data?.userType === "trainer") {
      window.location.assign("/coach/dashboard");
    }
  }
    // handle form submission
  };
  return (
    <div>
      <Row className="justify-content-center w-100 mt-4">
        <Col xl={4}>
          <MotionWrapper
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Card className="p-3 card-shadow " style={{ height: "500px" }}>
              <h1 className="text-center">Login</h1>
              <p className="login-text mt-2 mb-0 text-center">
                Welcome back to sign in to your account!
              </p>
              <hr />
              <Form role="form" className="mt-2 p-1" onSubmit={handleSubmit}>
                {loginInputs?.map((data, index) => (
                  <DynamicInput
                    key={index}
                    data={data}
                    value={formValues[data.name]}
                    handleChange={handleChange}
                  />
                ))}
                <Row className="my-4">
                  <Col xs="6">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                        rquired
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                  </Col>
                  {
                  // <Col xs="6" className="text-right">
                  //   <span
                  //     className="text-muted"
                  //     style={{ cursor: "pointer" }}
                  //     onClick={() => navigate("/forgetPassword")}
                  //   >
                  //     Forgot Password?
                  //   </span>
                  // </Col>
                  }
                </Row>
                <div className="text-center">
                  <Button
                    className="mt-5 login-button-color auth-button"
                    color="primary"
                    type="submit"
                    // onClick={() => navigate("/user/home")}
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
          </MotionWrapper>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
