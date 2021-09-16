import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import SearchResult from "./pages/search/SearchResult";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import NavAppBar from "./components/header/Nav";
 
function App() {
  const { user } = useContext(Context);
  return (
    <>
    <Router>
      <Switch> 
        <Route exact path="/">
        <NavAppBar /> <Home />
        </Route>
        <Route path="/register">{user ? <><NavAppBar /><Home /></> : <Register />}</Route>
        <Route path="/login">{user ? <><NavAppBar /><Home /></> : <Login />}</Route>
        <Route path="/write">{user ? <> <NavAppBar /><Write /></> : <Register />}</Route>
        <Route path="/settings">{user ? <><NavAppBar /><Settings /></> : <Register />}</Route>
        <Route path="/about"> <NavAppBar /> <About /></Route>
        <Route path="/search/:query" component={SearchResult} />
        <Route path="/post/:postId">
        <NavAppBar />
          <Single />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
