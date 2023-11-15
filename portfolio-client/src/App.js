import "./App.css";
import Layout from "./pages/Layout/Layout";
import { Routes, Route } from "react-router-dom";
// import CustomCursor from "./components/CustomCursor";
import AnimatedCursor from "react-animated-cursor";
function App() {
  return (
    <>
      {/* <CustomCursor /> */}
      <AnimatedCursor
        innerSize={10}
        outerSize={25}
        innerScale={1}
        outerScale={1}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#3979ef",
          zIndex: "9999",
        }}
        outerStyle={{
          border: "3px solid #3979ef",
          zIndex: "9999",
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
