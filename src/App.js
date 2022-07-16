import React, { useState } from "react";
import HomeScreen from "./screen/home";
import ServiceScreen from "./screen/service";

export default function App() {
  const [path, setPath] = useState(
    window.location.pathname.split("?")[0].split("/")[1]
  );
  const setScreen = (v) => {
    setPath(v.split("?")[0].split("/")[1]);
    window.history.replaceState("HOME", "HOME", v);
  };
  if (path === "service") return <ServiceScreen setScreen={setScreen} />;
  return <HomeScreen setScreen={setScreen} />;
}

// git add .
// git commit -m "Currection"
// git push origin main
