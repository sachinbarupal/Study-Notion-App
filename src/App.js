import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign Up/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col overflow-auto'>
      <NavBar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>

      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/sign-up" element = {<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element = {
         
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>

        }/>
      </Routes>

    </div>
  );
}

export default App;