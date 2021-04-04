import "./App.css";
import Main from "./Components/Main/Main";
import Login from "./../../FRONTEND/src/Components/Main/Log/Login";
import Register from "./../../FRONTEND/src/Components/Main/Log/Register";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
