import "./App.css";
import Lottie from "react-lottie";
import animationData from "./lotties/19877-the-beest-sticker-1.json";
import NavBar from "./componets/NavBar";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import CardView from "./pages/CardView";
import WebForm from "./pages/WebForm";
import Footer from "./componets/Footer";
import Activity from "./pages/Activity";
import Pricing from "./pages/Pricing";
import Auth from "./pages/Auth";
// import SignUp from "./pages/SignUp";
import Setting from "./pages/Setting";
import { addToken } from "./reducers/authReducers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToken());
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="App"
      sx={{
        backgroundColor: "#e6e8eb",
        display: "flex",
        flexDirection: "column",
        // minHeight: "100vh",
      }}
    >
      <header className="App-header">{token ? <NavBar /> : <></>}</header>
      <Routes>
        <Route path="/" element={token ? <Home /> : <Auth />} />

        <Route path="/cardview" element={token ? <CardView /> : <Auth />} />
        <Route path="/webform" element={token ? <WebForm /> : <Auth />} />
        <Route path="/activity" element={token ? <Activity /> : <Auth />} />
        <Route path="/pricing" element={token ? <Pricing /> : <Auth />} />
        <Route path="/setting" element={token ? <Setting /> : <Auth />} />
        <Route path="/domians" />
      </Routes>
      {token ? <Footer /> : <></>}
    </div>
  );
}

export default App;
