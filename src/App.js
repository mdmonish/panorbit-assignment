import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
      </Routes>
    </div>
  );
}

export default App;
