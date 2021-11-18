import './App.scss';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import Itempg from './Components/Itempg/Itempg';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/itempg"><Itempg /></Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
