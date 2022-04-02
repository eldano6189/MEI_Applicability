import "./App.css";
import { useContext } from "react";
import VehData from "./Context/Context";
import { DetailedView } from "./Components/Detailed-view/DetailedView";
import { InfoPanel } from "./Components/Info-panel/InfoPanel";
import { QuickView } from "./Components/Quick-view/QuickView";
import { Header } from "./Components/Header/Header";

function App() {
  const { veh } = useContext(VehData);

  return (
    <div className="App">
      <Header />
      <InfoPanel />
      {veh.info.type !== "" ? (
        <>
          <QuickView />
          <DetailedView />
        </>
      ) : null}
    </div>
  );
}

export default App;
