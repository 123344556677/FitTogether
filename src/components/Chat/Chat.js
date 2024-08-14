import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Col, Row } from "reactstrap";
import ChatSide from "./ChatSide";
import ChatMessage from "./ChatMessage";
import ChatUpperBar from "./ChatUpperBar";
import { io } from "socket.io-client";
import { getUser } from "Api/Api";


const Chat = () => {
  const userId = localStorage.getItem("id");
  const socket = io(process.env.REACT_APP_CHAT_URL);
  const [onlineUsers, setOnlineUsers] = useState();
  const [userData, setUserData] = useState();
  const [newMessage, setNewMessage] = useState(null);
  const [recieveMessage, setRecieveMessage] = useState(null);
   useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUser(userId);
      console.log(response, "user reponse----->");
      setUserData(response?.data?.user);
    };
    fetchUserInfo();
  }, []);
  useEffect(() => {
    socket.on('connect', () => {
      console.log("connected-->")
    },[]);
    socket.emit('new-user-add', userId);
    socket.on('get-users', (users) => {
      setOnlineUsers(users);
    });
  }, [userId]);

  useEffect(() => {
    if (newMessage !== null) {
      socket.emit('send-message', newMessage);
    }
  }, [newMessage]);

  useEffect(() => {
    socket.on('receive-message', (data) => {
      setRecieveMessage(data);
      console.log(data,"recieve message")
    });
  }, []);

  const handleSendMessage = (messageData) => {
    const receiverId=messageData?.recieverId
    setNewMessage({ ...messageData, receiverId });
  };

  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
    <div className=" ml-lg-2 mr-lg-2 mt-3">
    <h1 className="text-center subscription-heading mb-3">Connect With Your {userData?.userType==="user"?"Coach.":"Clients"}</h1>
      <ChatUpperBar />
      <Row className="w-100">
        <Col xl={4}>
          <div className="chat-upper-bar"></div>
          <ChatSide component="Chat"/>
        </Col>
        <Col xl={8}>
          <div className="chat-upper-bar"></div>
          <ChatMessage onSendMessage={handleSendMessage}  recieveMessage={recieveMessage}/>
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default Chat;
