import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import api from "../../../api";
import QualitiesList from "../../ui/qualities/qualitiesList";
import {useNavigate} from "react-router-dom";

const UserPage = ({userId}) => {
  const history = useNavigate()
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then(data => setUser(data))
  })
  const handleClick = () => {
    history('/users')
  }

  if (user) {
    return <div className='m-3'>
      <h1>{user.name}</h1>
      <h2>Профессия: {user.profession.name}</h2>
      <QualitiesList qualities={user.qualities}/>
      <p>Встретился {user.completedMeetings} раз(а)</p>
      <h2>Оценка: {user.rate}</h2>
      <button className="btn btn-secondary mt-2" onClick={handleClick}>Все пользователи</button>
    </div>
  } else {
    return <h1>Loading..</h1>
  }
};


UserPage.propTypes = {
  userId: PropTypes.string.isRequired
}

export default UserPage;
