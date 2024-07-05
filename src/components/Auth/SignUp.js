import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "reactstrap";
import "./Auth.css";
import { signupInputs } from "assets/Mock_Data/FormData";
import MotionWrapper from "components/FramerMotion/FramerMotion";
import DynamicInput from "components/DynamicInputs/DynamicInputs";
import { register } from "Api/Api";
import DynamicModal from "components/Modal/Modal";
import { getQuery } from "Api/Api";
import { setLocalStorage } from "DynamicFunctions";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState(null);
  const [value, setValue] = useState(null);
  const [title, setTitle] = useState("");
  const [signupQuery, setSignUpQuery] = useState("");
  const [formValues, setFormValues] = useState(
    signupInputs.reduce((acc, input) => {
      acc[input.name] = input.value || "";
      return acc;
    }, {})
  );


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

//   useEffect(()=>{
//  openModal();
//   },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      fname: formValues?.firstName,
      lname: formValues?.lastName,
      email: formValues?.email,
      password: formValues?.password,
      userType: formValues?.userType,
    };
    const response = await register(values);
    console.log(response, "response---->values");
    setLocalStorage("token", response.data?.data?.token);
    setValue(response.data?.data?.token)
    if (response?.data?.data?.userType==="user") {
       const openModal = () => {
    setIsOpen(true);
    setCurrentView("signupQuery");
    // setModalValue(announcement);
    // setDescription("Get to know about latest news!");
    setTitle("FitTogether");
  };
      openModal();
    }
    // Navigate('/login')
  };

  const slideVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.6 } },
  };

  console.log(formValues, "values------->");

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
            <Card className="p-3 card-shadow mb-4">
              <h1 className="text-center">SignUp</h1>
              <p className="login-text mt-2 text-center mb-0">
                Explore your personalized fitness experience!
              </p>
              <hr />
              <Form role="form" className="mt-1 p-1" onSubmit={handleSubmit}>
                {signupInputs?.map((data, index) => (
                  <DynamicInput
                    key={index}
                    data={data}
                    value={formValues[data.name]}
                    handleChange={handleChange}
                  />
                ))}
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                        required
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
                    type="submit"
                  >
                    Create Account
                  </Button>
                  <p className="signup-text mt-2">
                    Already have an account?
                    <a className="login-link ml-1" href="/login">
                      Login
                    </a>
                  </p>
                </div>
              </Form>
            </Card>
          </MotionWrapper>
        </Col>
      </Row>
      <Container />
      <DynamicModal
        isOpen={isOpen}
        toggle={() => setIsOpen(false)}
        view={currentView}
        title={title}
        value={value}
      />
    </div>
  );
};

export default SignUp;
