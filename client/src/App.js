import "./App.css";
import { Container, Navbar } from "react-bootstrap";
import {Topbar} from './components/Topbar';
import { About } from "./components/About";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { Contact } from "./components/Contact";
import { Policy } from "./components/Policy";
import {NavBar} from "./components/NavBar";
import {HomeScreen} from "./screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <NavBar/>
      <Switch>
       <Route path="/" component={HomeScreen} exact={true}/>
        <Route path="/about" component={About} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/policy" component={Policy} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
