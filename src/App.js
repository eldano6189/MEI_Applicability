import "./App.css";

import Amplify from "aws-amplify";
import { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Data from "./Context/Context";
import { Vehicles } from "./Data/Vehicles";
import awsmobile from "./aws-exports";

import { Header } from "./Components/Header/Header";
import { ScrollTop } from "./Components/Scroll-top/ScrollTop";
import { VehiclePage } from "./Pages/Vehicle-page/VehiclePage";
import { FleetPage } from "./Pages/Fleet-page/FleetPage";
import { ChangePassword } from "./Components/Change-password/ChangePassword";
import { LoginPage } from "./Pages/Login-page/LoginPage";

Amplify.configure(awsmobile);

function App() {
  const location = useLocation();
  const { loggedIn, theme } = useContext(Data);

  return (
    <div className={`App ${theme ? "dark-mode" : "light-mode"}`}>
      <Header />
      <ScrollTop>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            {loggedIn && (
              <>
                <Route exact path="/" element={<FleetPage />} />
                <Route
                  exact
                  path="/changepassword"
                  element={<ChangePassword />}
                />
                {Vehicles.map((vehicle, index) => {
                  return (
                    <Route
                      key={index}
                      exact
                      path={`/${vehicle.vrn}`}
                      element={<VehiclePage data={vehicle} authed={true} />}
                    />
                  );
                })}
              </>
            )}
            {!loggedIn && <Route exact path="/login" element={<LoginPage />} />}
            <Route
              path="*"
              element={<Navigate replace to={loggedIn ? "/" : "/login"} />}
            />
          </Routes>
        </AnimatePresence>
      </ScrollTop>
    </div>
  );
}

export default App;
