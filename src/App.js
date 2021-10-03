// import  ChatPage  from "./components/Pages/ChatPage";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ChatPage from "./components/Pages/ChatPage/ChatPage";


function App() {
  return (
    <Router>
      <Switch>

        {
          localStorage.getItem("me") ? (<Route path="/chat" component={ChatPage}></Route>): (<span>boş</span>)
        }
        <Route exact path="/" component={LoginPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
