import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Button, Card} from "reactstrap";
import PaymentForm from "./PaymentForm";
import { stripePromise } from "DynamicFunctions";
import { Elements } from "@stripe/react-stripe-js";
import { getUser } from "Api/Api";

const SubscriptionCards = ({ data }) => {
    const id = localStorage.getItem("id");
    const [userData, setUserData] = useState();
    useEffect(()=>{
     const fetchUserInfo = async () => {
        const response = await getUser(id);
        console.log(response,"user reponse----->")
        setUserData(response?.data?.user);
    };
    fetchUserInfo()
    },[])
    
  return (
    <Elements stripe={stripePromise}>
    <div>
      <Card
        className="subscription-card p-3"
        style={{
          border:
            data?.planName === "Standard Plan"
              ? "1px solid #751177"
              : "1px solid #281BBF",
        }}
      >
        <h2 className="">{data?.planName}</h2>
        <h1 className="mb-0">
          {data?.planPrice} /
          <span className="pricing-duration">{data?.planDuration}</span>
        </h1>
        <hr className="line-color" />
        <h2>Features</h2>
        <h5>Everything in {data?.planName} plus...</h5>
        <ul className="pricing-list">
          {data?.features?.map((val, index2) => (
            <li className="pricing-list-item" key={index2}>
              <FaArrowRight style={{ color: "green" }} className="mr-2" /> {val}
            </li>
          ))}
        </ul>
        {
        // <Button
        //   className={
        //     data?.planName === "Standard Plan"
        //       ? "mt-5 login-button-color auth-button"
        //       : "mt-5 auth-button signUp-button-color"
        //   }
        //   color="primary"
        //   type="button"
        // >
        //   Get Started
        // </Button>
        }
        <PaymentForm planData={data} userData={userData}/>
      </Card>
    </div>
    </Elements>
  );
};

export default SubscriptionCards;
