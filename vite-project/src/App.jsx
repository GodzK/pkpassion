import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import pklogo from "./assets/pkss.jpg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
import Nav from "./components/nav";


function App() {
  const [data, setData] = useState([
    {
      img: pklogo,
      name: "Phakaphol",
      age: "18",
      city: "Bangkok",
      followers: "430",
      likes: "1000",
      photos: "100",
    },
  ]);

  return (
    <div>   
      <Nav/>   
      <Card data={data} />
    </div>
  );
}

export default App;
