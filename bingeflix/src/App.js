import './App.scss';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import Itempg from './Components/Itempg/Itempg';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/signup"><Signup /></Route>
           <div>
              <Navbar />
              <Route exact path="/"><Home /></Route>

              <Route path="/itempg"><Itempg /></Route>
            </div>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
