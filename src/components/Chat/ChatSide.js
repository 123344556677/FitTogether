import React, { useState, useEffect } from "react";
import { getInitials } from "../../DynamicFunctions";
import { inboxColors, profileColors } from "assets/Mock_Data/ChatData";
import { inboxChats } from "assets/Mock_Data/ChatData";
import { getColorPalette } from "../../DynamicFunctions";
import { truncateText } from "../../DynamicFunctions";

const ChatSide = ({ component, activeChat }) => {
  const [chat, setChat] = useState(false);

  useEffect(() => {
    setChat(true);
  }, []);

  const handleChatNavigation = () => {
    activeChat(true);
  };

  return (
    <div className="chat-left-side">
      {inboxChats?.map((data, index) => {
        const { parentColor, childColor } = getColorPalette(
          index,
          profileColors.map((c) => c.parentColor),
          profileColors.map((c) => c.childColor)
        );

        return (
          <>
            <div
              className="user-info"
              key={index}
              style={{
                backgroundColor: inboxColors[index % inboxColors.length],
                padding: component === "Chat" ? "20px" : "40px",
              }}
              onClick={handleChatNavigation}
            >
              <div
                className="user-image"
                style={{ backgroundColor: parentColor }}
              >
                <div className="user-initials" style={{ color: childColor }}>
                  {getInitials(data?.name)}
                </div>
              </div>
              <div className="user-details ml-3">
                <div className="user-name">{data?.name}</div>
                {component === "Chat" ? (
                  <div className="latest-message mt-1">
                    {truncateText(data?.message, 30)}
                  </div>
                ) : (
                  <div className="latest-message mt-1">{data?.message}</div>
                )}
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
