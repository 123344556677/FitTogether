import React from "react";
import { Button, Card, Col, Media, Row } from "reactstrap";
import "./Subscriber.css";

const Subscriber = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
      <h1 className="subscription-heading p-3">
        Stay active <br /> Get more clients.{" "}
      </h1>
      <Row>
        <Col xl={4}>
          <Card className="swiper-services-slide-card card-shadow subscriber-cards mt-4">
            <div className="text-center">
              <Media
                object
                src={require("../../../assets/img/images/tr1.jfif")}
                alt="Profile"
                className="community-profile-img"
              />

              <h1 className="mt-2">Abdul Hannan</h1>
              <h5 style={{ wordBreak: "break-word" }}>Expires on: 10-06-24</h5>
              <Button
                className="mt-3 login-button-color auth-button"
                color="primary"
                type="button"
              >
                View Porfile
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="swiper-services-slide-card card-shadow subscriber-cards mt-4">
            <div className="text-center">
              <Media
                object
                src={require("../../../assets/img/images/tr1.jfif")}
                alt="Profile"
                className="community-profile-img"
              />

              <h1 className="mt-2">Abdul Hannan</h1>
              <h5 style={{ wordBreak: "break-word" }}>Expires on: 10-06-24</h5>
              <Button
                className="mt-3 login-button-color auth-button"
                color="primary"
                type="button"
              >
                View Porfile
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="swiper-services-slide-card card-shadow subscriber-cards mt-4">
            <div className="text-center">
              <Media
                object
                src={require("../../../assets/img/images/tr1.jfif")}
                alt="Profile"
                className="community-profile-img"
              />

              <h1 className="mt-2">Abdul Hannan</h1>
              <h5 style={{ wordBreak: "break-word" }}>Expires on: 10-06-24</h5>
              <Button
                className="mt-3 login-button-color auth-button"
                color="primary"
                type="button"
              >
                View Porfile
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="swiper-services-slide-card card-shadow subscriber-cards mt-4">
            <div className="text-center">
              <Media
                object
                src={require("../../../assets/img/images/tr1.jfif")}
                alt="Profile"
                className="community-profile-img"
              />

              <h1 className="mt-2">Abdul Hannan</h1>
              <h5 style={{ wordBreak: "break-word" }}>Expires on: 10-06-24</h5>
              <Button
                className="mt-3 login-button-color auth-button"
                color="primary"
                type="button"
              >
                View Porfile
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Subscriber;
