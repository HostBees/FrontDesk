import logo from "./logo.svg";
import "./App.css";
import Lottie from "react-lottie";
import animationData from "./lotties/19877-the-beest-sticker-1.json";
import NavBar from "./componets/NavBar";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import CardView from "./pages/CardView";
import WebForm from "./pages/WebForm";
import Footer from "./componets/Footer";
function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="App" sx={{backgroundColor:"#e6e8eb"}}>
      <header className="App-header">
        <NavBar  />
   
      </header>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cardview" element={<CardView />} />
        <Route path="/webform" element={<WebForm/>} />

        <Route
          path="/activity"
          // element={<Activity/>}
        />

        <Route path="/domians" />
        <Route path="setting" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
