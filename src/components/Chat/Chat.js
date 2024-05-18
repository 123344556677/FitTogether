import React from "react";
import "./Chat.css";
import { Col, Row } from "reactstrap";
import ChatSide from "./ChatSide";
import ChatMessage from "./ChatMessage";
import ChatUpperBar from "./ChatUpperBar";


const Chat = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
    <div className=" ml-lg-2 mr-lg-2 mt-3">
    <h1 className="text-center subscription-heading mb-3">Connect With Your Coach.</h1>
      <ChatUpperBar />
      <Row className="w-100">
        <Col xl={4}>
          <div className="chat-upper-bar"></div>
          <ChatSide component="Chat"/>
        </Col>
        <Col xl={8}>
          <div className="chat-upper-bar"></div>
          <ChatMessage />
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default Chat;
