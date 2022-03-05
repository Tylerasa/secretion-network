import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" element={Login} />
      <Route exact path="/home" element={Home} />
    </BrowserRouter>
  );
}

export default App;
