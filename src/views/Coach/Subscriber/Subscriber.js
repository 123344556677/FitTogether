import React, { useEffect, useState } from "react";
import { Button, Card, Col, Media, Row } from "reactstrap";
import "./Subscriber.css";
import { getUserTrainerClients } from "Api/Api";
import moment from "moment";

const Subscriber = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const fetchChatPeople = async () => {
      const response = await getUserTrainerClients();
      console.log(response, "clients response----->");
      setClients(response?.data?.clientsWithSubscriptions|| []);
    };
    fetchChatPeople();
  }, []);
  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
      <h1 className="subscription-heading p-3">
        Stay active <br /> Get more clients.{" "}
      </h1>
      <Row>
      {
        clients?.map((data)=>(
        <Col xl={4}>
          <Card className="swiper-services-slide-card card-shadow subscriber-cards mt-4">
            <div className="text-center">
              <Media
                object
                src={data?.profilePicture||require("../../../assets/img/images/tr1.jfif")}
                alt="Profile"
                className="community-profile-img"
              />

              <h1 className="mt-2">{data?.fname} {data?.lname}</h1>
              <h5 style={{ wordBreak: "break-word" }}>Expires on:{ moment(data?.subscriptionEndDate).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}</h5>
            </div>
          </Card>
        </Col>
        ))
      }
       
      </Row>
    </div>
  );
};

export default Subscriber;
