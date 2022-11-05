import React from "react";
import {Route, Routes} from "react-router-dom";

import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import NavBar from "./components/ui/navBar";
import UserPage from "./components/page/userPage/userPage";
import RegisterForm from "./components/ui/registerForm";
import LoginForm from "./components/ui/loginForm";


function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/users" element={<Users/>}>
          <Route path="users/:userId" element={<UserPage/>}/>
        </Route>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}>
          <Route path='/login/:type?'/>
        </Route>
        {/*<Route path='/login' element={<Login/>}/>*/}
        <Route path="*" element={<h1>Ошибочка 404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
