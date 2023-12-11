import "./App.css";
import Layout from "./pages/Layout/Layout";
import React, { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
// import CustomCursor from "./components/CustomCursor";
import AnimatedCursor from "react-animated-cursor";
function App() {
  function getCustomDateTime() {
    const options = {
      weekday: "long", // full day name (e.g., Monday)
      day: "numeric", // day of the month (e.g., 30)
      month: "long", // full month name (e.g., September)
      hour: "numeric", // hours (e.g., 01)
      minute: "numeric", // minutes (e.g., 30)
      hour12: true, // use 12-hour clock format
    };

    const now = new Date();
    return now.toLocaleString("en-US", options);
  }
  const getClientInfo = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const { ip } = await response.json();

      const browserInfo = {
        dateTime: getCustomDateTime(),
        ipAddress: ip,
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
      };

      // Send the client information to the server using axios

      await axios.post("api/saveClientInfo", browserInfo);

      console.log("Client information sent to the server:", browserInfo);
    } catch (error) {
      // console.error("Error fetching client information:", error);
    }
  };

  useEffect(() => {
    getClientInfo();
  }, []);

  return (
    <>
      {/* <CustomCursor /> */}
      <AnimatedCursor
        innerSize={7}
        outerSize={30}
        innerScale={1}
        outerScale={1}
        outerAlpha={0}
        // hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#af5113",
          zIndex: "99999999",
          transition: "none",
        }}
        outerStyle={{
          border: "4px solid #af5113",
          zIndex: "99999999",
          transition: "none",
        }}
      />
      <Routes>
        {/* // Public Route */}
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
