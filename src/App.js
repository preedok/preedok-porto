import React, { useState, useEffect } from "react";
import Router from "./router";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return (
      <div
        className="d-flex"
        style={{
          backgroundColor: "#041e44",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src={require("../src/assets/logo.png")} alt="Logo" />
      </div>
    );
  }
  return (
    <>
      <Router />
    </>
  );
}

export default App;
