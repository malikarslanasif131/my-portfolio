// CustomCursor.js
import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  const cursorOptions = {
    innerStyle: {
      position: "fixed",
      top: 0,
      left: 0,
      transform: "translate(-50%, -50%)",
      borderRadius: "50%",
      zIndex: 70,
      pointerEvents: "none",
      width: "7px",
      height: "7px",
      background: "red",
    },
    outerStyle: {
      position: "fixed",
      top: 0,
      left: 0,
      transform: "translate(-50%, -50%)",
      borderRadius: "50%", // Make it a circle by setting border-radius to 50%
      zIndex: 70,
      pointerEvents: "none",
      width: "30px", // Adjust the width if necessary
      height: "30px", // Adjust the height if necessary
      border: "2px solid red", // Border styles
      // other styles...
    },
    // other cursor options...
  };

  return <AnimatedCursor {...cursorOptions} />;
};

export default CustomCursor;
