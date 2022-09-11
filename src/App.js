import logo from "./logo.svg";
import "./App.css";
import Lottie from "react-lottie";
import animationData from './lotties/19877-the-beest-sticker-1.json';
import WebCard from "./componets/WebCard";
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
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <WebCard/>
      </header>
    </div>
  );
}

export default App;
