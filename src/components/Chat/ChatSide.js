import React, { useState, useEffect } from "react";
import { getInitials } from "../../DynamicFunctions";
import { inboxColors, profileColors } from "assets/Mock_Data/ChatData";
import { inboxChats } from "assets/Mock_Data/ChatData";
import { getColorPalette } from "../../DynamicFunctions";
import { truncateText } from "../../DynamicFunctions";
import { getChatPeople } from "Api/Api";

const ChatSide = ({ component }) => {
  const [chat, setChat] = useState(false);
  const [chatPeople, setChatPeople] = useState();

  useEffect(() => {
    const fetchChatPeople = async () => {
      const response = await getChatPeople();
      console.log(response, "chat response----->");
      setChatPeople(response?.data?.populatedParticipants || []);
    };
    fetchChatPeople();
  }, []);

  useEffect(() => {
    setChat(true);
  }, []);

  return (
    <div className="chat-left-side">
      {chatPeople?.map((data, index) => {
        return (
          <>
            <div
              className="user-info"
              key={index}
              style={{
                backgroundColor: "#F1F6FB",
                padding: component === "Chat" ? "20px" : "40px",
              }}
            >
              <div
                className="user-image"
                style={{ backgroundColor: "#FBCACA" }}
              >
                <div className="user-initials" style={{ color: "#884747" }}>
                  {getInitials(data?.fname)}
                </div>
              </div>
              <div className="user-details ml-3">
                <div className="user-name">{data?.fname} {data?.lname}</div>
                {
                  // <div className="latest-message mt-1">
                  //   Online
                  // </div>
                }
              </div>
              <div className="message-time">{data?.time}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ChatSide;
