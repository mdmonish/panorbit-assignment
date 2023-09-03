import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <Routes>
        {/* List of all the paths */}
        <Route exact path="/" Component={LandingPage} />
        <Route exact path="/HomePage/ProfileDetail" Component={HomePage} />
        <Route exact path="/HomePage/Posts" Component={HomePage} />
        <Route exact path="/HomePage/Gallery" Component={HomePage} />
        <Route exact path="/HomePage/ToDos" Component={HomePage} />
      </Routes>
    </div>
  );
}

export default App;
