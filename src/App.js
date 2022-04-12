import Content from "./Content";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import Trip from "./Tripfin";

function App() {
  return (
    <Routes>
      <Route exact path="/content/:page" element={<Content />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route path="*" element={<Navigate to="/home" />}></Route>
    </Routes>
  );
}

export default App;
