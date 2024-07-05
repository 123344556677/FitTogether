import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import "./Subscription.css";
import { SubscriptionPlan } from "assets/Mock_Data/SubscriptionData";
import SubscriptionCards from "./SubscriptionCards";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "DynamicFunctions";
import { getSubscription } from "Api/Api";

const Subscription = () => {
  const [subData, setSubData] = useState();
  useEffect(()=>{
     const fetchSubInfo = async () => {
        const response = await getSubscription();
        console.log(response,"sub reponse----->")
        setSubData(response?.data?.subscription);
    };
    fetchSubInfo()
    },[])
  return (
    
      <div className="pt-5 pt-md-8 mb-3 p-3">
        <h1 className="subscription-heading p-3">
          We'ave got a plan <br /> that's perfect for you.{" "}
        </h1>
        <hr/>
        <h3 className="m-3 text-center">You are currently subscribed to {subData?.planId==="1"&& "Standard Plan"} {subData?.planId==="2"&& "Premium Plan"} {!subData?.planId&& "No Plan"}</h3>
        
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
