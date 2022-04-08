import "./App.css";

import Amplify from "aws-amplify";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import VehData from "./Context/Context";
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
  const { loggedIn } = useContext(VehData);

  return (
    <div className="App">
      <Header />
      <ScrollTop>
        <Routes>
          {!loggedIn && <Route exact path="/login" element={<LoginPage />} />}
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
          <Route
            path="*"
            element={<Navigate replace to={loggedIn ? "/" : "/login"} />}
          />
        </Routes>
      </ScrollTop>
    </div>
  );
}

export default App;
