import "./App.css";
import { DetailedView } from "./Components/Detailed-view/DetailedView";
import { InfoPanel } from "./Components/Info-panel/InfoPanel";
import { QuickView } from "./Components/Quick-view/QuickView";
import { SidePanel } from "./Components/Side-panel/SidePanel";

function App() {
  return (
    <div className="App">
      <SidePanel />
      <InfoPanel />
      <QuickView />
      <DetailedView />
    </div>
  );
}

export default App;
