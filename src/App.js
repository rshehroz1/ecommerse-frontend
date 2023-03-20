import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./components/screens/Home"
import Signin from "./components/screens/Signin"
import Profile from "./components/screens/Profile"
import CreatePost from './components/screens/CreatePost';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/createpost" component={CreatePost}/>
      </Switch>
    </Router>
  );
}

export default App;
