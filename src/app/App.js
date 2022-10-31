import React from "react";
import {Route, Routes} from "react-router-dom";

import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import NavBar from "./components/navBar";
import UsersList from "./components/usersList";
import UserPage from "./components/userPage";


function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        {/*<Route path='/users/:userId' exact element={<Users/>}/>*/}
        {/*<Route path='/users/:userId' element={<Users/>}/>*/}
        <Route path="users" element={<UsersList/>}>
          <Route path=":userId?" element={<UserPage/>}/>
        </Route>

        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        {/*<Route path="*" element={<h1>Ошибочка 404</h1>}/>*/}
      </Routes>
    </div>

  );
}

export default App;
