import React from "react";

const TextWithBackground = ({ backgroundText, mainText }) => {
  return (
    <div className="text-container">
      <h1 className="background-text">{backgroundText}</h1>
      <h1 className="main-text text-center">{mainText}</h1>
    </div>
  );
};

export default TextWithBackground;
