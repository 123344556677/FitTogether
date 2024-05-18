import { forgetInputs } from 'assets/Mock_Data/FormData';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
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

const ForgetPassowrd = () => {
  return (
    <div>
      <Row className="justify-content-center w-100 mt-4">
        <Col xl={4}>
          <Card className="p-3 card-shadow " style={{ height: "500px" }}>
            <h1 className="text-center">Forget Password</h1>
            <p className="login-text mt-2 mb-0 text-center">
              We will send a code to your email
            </p>
            <hr />
            <Form role="form" className="mt-2 p-1">
              {forgetInputs?.map((data, index) => (
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
              <div className="text-center">
                <Button
                  className="mt-5 login-button-color auth-button"
                  color="primary"
                  type="button"
                >
                  Send Code <FaArrowRight className='ml-2' />
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ForgetPassowrd