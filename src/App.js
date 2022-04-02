import "./App.css";
import { DetailedView } from "./Components/Detailed-view/DetailedView";
import { InfoPanel } from "./Components/Info-panel/InfoPanel";
import { QuickView } from "./Components/Quick-view/QuickView";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <InfoPanel />
      <QuickView />
      <DetailedView />
    </div>
  );
}

export default App;
