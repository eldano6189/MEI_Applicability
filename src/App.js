import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import { useContext } from "react";
import VehData from "./Context/Context";
import { Vehicles } from "./Data/Vehicles";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { LoginPage } from "./Pages/Login-page/LoginPage";
import { VehiclePage } from "./Pages/Vehicle-page/VehiclePage";
import { FleetPage } from "./Pages/Fleet-page/FleetPage";

Amplify.configure(awsmobile);

function App() {
  const { loggedIn } = useContext(VehData);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        {loggedIn ? (
          <>
            <Route exact path="/" element={<FleetPage />} />
            {Vehicles.map((vehicle, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={`/${vehicle.info.vrn}`}
                  element={<VehiclePage data={vehicle} authed={true} />}
                />
              );
            })}
          </>
        ) : (
          <Route path="*" element={<Navigate replace to="/login" />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
