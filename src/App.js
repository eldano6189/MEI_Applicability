import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import { useContext } from "react";
import VehData from "./Context/Context";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { LoginPage } from "./Pages/Login-page/LoginPage";
import { MainPage } from "./Pages/Main-page/MainPage";

Amplify.configure(awsmobile);

function App() {
  const { loggedIn } = useContext(VehData);
  console.log(loggedIn);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        {loggedIn ? (
          <>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/admin" element={<MainPage />} />
          </>
        ) : (
          <Route path="*" element={<Navigate replace to="/login" />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
