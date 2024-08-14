import { getAllMessages, sendMessage, getChatPeople } from "Api/Api";
import { errorAlert } from "components/Alerts/Alerts";
import { TimeDifference } from "DynamicFunctions";
import React, { useEffect, useRef, useState } from "react";
import { Button, Input, InputGroup } from "reactstrap";

const ChatMessage = ({ onSendMessage, recieveMessage }) => {
  const [message, setMessage] = useState('');
  const [recieverId, setRecieverId] = useState(null);
  const [allMessages, setAllMessages] = useState([]);
  const userId = localStorage.getItem("id");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const chatPeopleResponse = await getChatPeople();
        const initialRecieverId = chatPeopleResponse?.data?.populatedParticipants[0]?._id;
        setRecieverId(initialRecieverId);

        const messageResponse = await getAllMessages({ recieverId: initialRecieverId });
        setAllMessages(messageResponse?.data?.messages);
        scrollToBottom(); 
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };
    fetchChatData();
  }, []);

  useEffect(() => {
    if (recieveMessage) {
      setAllMessages((prevMessages) => [...prevMessages, recieveMessage]);
      scrollToBottom(); 
    }
  }, [recieveMessage]);

  const sendMsg = async () => {
    if (message.trim()) {
      const values = {
        recieverId,
        senderId: userId,
        text: message,
      };
        const response = await sendMessage(values);
        if (response) {
          setAllMessages((prevMessages) => [
            ...prevMessages,
            { ...response.data.message, senderId: userId } 
          ]);
          onSendMessage(response?.data?.message);
          setMessage('');
          scrollToBottom(); 
        }
      } 
    else {
      errorAlert("Message should not be empty");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="message-section" ref={messagesEndRef}>
      <div className="messages">
        {allMessages?.map((data, index) => (
          <div key={index} className={`message ${data?.senderId === userId ? 'left' : 'right'}`}>
            <div className={`message-content-${data?.senderId === userId ? 'left' : 'right'} mt-2`}>
              {data?.text}
            </div>
            <div className="timestamp mt-1">
              {TimeDifference(data?.createdAt)}
            </div>
          </div>
        ))}
      </div>
      <div className="input-section">
        <InputGroup className="msg-send-input-group">
          <Input
            className="msg-send-input"
            placeholder="Write message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button className="msg-send-button" onClick={sendMsg}>
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
