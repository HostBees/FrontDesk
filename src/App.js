import logo from "./logo.svg";
import "./App.css";
import Lottie from "react-lottie";
import animationData from './lotties/19877-the-beest-sticker-1.json';
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
        <Lottie options={defaultOptions} height={400} width={400} />
        <p>HostBees Welcomes You !</p>
        <h6>admin@hostbees.me</h6>
      </header>
    </div>
  );
}

export default App;
