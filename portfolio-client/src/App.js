import "./App.css";
import Layout from "./pages/Layout/Layout";
import React, { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
// import CustomCursor from "./components/CustomCursor";
import AnimatedCursor from "react-animated-cursor";
function App() {
  const getClientInfo = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const { ip } = await response.json();

      const browserInfo = {
        ipAddress: ip,
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
      };

      // Send the client information to the server using axios

      await axios.post("api/saveClientInfo", browserInfo);

      // console.log("Client information sent to the server:", browserInfo);
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
          backgroundColor: "#da712c",
          zIndex: "9999",
          transition: "none",
        }}
        outerStyle={{
          border: "4px solid #da712c",
          zIndex: "9999",
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
