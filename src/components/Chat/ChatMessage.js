import React from "react";
import { Button, Input, InputGroup } from "reactstrap";

const ChatMessage = () => {
  return (
    <div className="message-section">
      <div className="messages">
        <div className="date-tag">December 12, 2023</div>
        <div className="message left">
          <div className="message-content-left mt-2">
            Lorem ipsum dolor sit amet,{" "}
          </div>
          <div className="message-content-left mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
          <div className="timestamp mt-1">10:00 AM</div>
        </div>
        <div className="message right">
          <div className="message-content-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
          <div className="timestamp">
            10:05 AM <span className="read-status">✔✔</span>
          </div>
        </div>
        <div className="date-tag">Today</div>
        <div className="message left">
          <div className="message-content-left mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
          <div className="timestamp mt-1">10:00 AM</div>
        </div>
        <div className="message right">
          <div className="message-content-right">
            Lorem ipsum dolor sit amet,
          </div>
          <div className="timestamp">
            10:05 AM <span className="read-status">✔✔</span>
          </div>
        </div>
      </div>
      <div className="input-section">
        <InputGroup className="msg-send-input-group">
          <Input className="msg-send-input" placeholder="Write message..." />
          <Button className="msg-send-button">
            <img
              src={require("../../assets/img/icons/common/send.png")}
              alt="send-icon"
            />
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default ChatMessage;
