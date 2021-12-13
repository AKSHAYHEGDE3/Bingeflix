import './App.scss';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Itempg from './Components/Itempg/Itempg';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Watch from './Components/watch/Watch';
import { useState, useEffect } from 'react';
import { UserContext } from './UserContext'
import AdminHome from './Components/Admin/AdminHome';
import AdminSection from './Components/Admin/AdminSection';
import CreateVideos from './Components/Admin/CreateVideos';
import EditVideos from './Components/Admin/EditVideos';



function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem('token')
      try {
        const res = await fetch('http://localhost:5000/verifyUser', {
          headers: { 'token': `bearer ${token}` },
        });
        const data = await res.json();
        console.log(data)
        setUser(data);
        const authtoken =  user.accessToken
        localStorage.setItem('token', authtoken)

      } catch (error) {
        console.log("catch")
        console.log(error)
      }
    }

    verifyUser();
  },[] )
  console.log(user)
  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route exact path="/login">{user?<Redirect to='/' />:<Login />}</Route>
            <Route exact path="/signup">{user?<Redirect to='/' />:<Signup />}</Route>
           

            <div>
            { user ? <Navbar />: ""}
              <Route exact path="/">{user?<Home />:<Login />}</Route>
              <Route path="/watch/:type/:genre">{user?<Watch />:<Login />}</Route>
              <Route path="/itempg/:id">{user?<Itempg />:<Login />}</Route>
              <Route path="/admin">{user?<AdminHome />:<Login />}</Route>
              <Route path="/adminSection/:lists">{user?<AdminSection />:<Login />}</Route>
              <Route path="/addVideos">{user?<CreateVideos />:<Login />}</Route>
              <Route path="/editVideos/:id">{user?<EditVideos />:<Login />}</Route>
            </div>
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
