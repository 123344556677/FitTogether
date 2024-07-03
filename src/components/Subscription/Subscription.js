import React from "react";
import { Col, Row } from "reactstrap";
import "./Subscription.css";
import { SubscriptionPlan } from "assets/Mock_Data/SubscriptionData";
import SubscriptionCards from "./SubscriptionCards";

const Subscription = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
      <h1 className="subscription-heading p-3">
        We'ave got a plan <br /> that's perfect for you.{" "}
      </h1>
      <Row className="justify-content-center mt-3">
        {SubscriptionPlan?.map((data, index) => (
          <Col xl={4} key={index}>
            <SubscriptionCards data={data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Subscription;
