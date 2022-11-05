import React from 'react';
import {useParams} from "react-router-dom";
import UserPage from "../components/page/userPage/userPage";
import UsersPageList from "../components/page/userPageList/usersPageList";


const Users = () => {
  const {userId} = useParams()
  //const {userId} = params

  return <>{userId ? <UserPage userId={userId}/> : <UsersPageList/>}</>
};

export default Users;
