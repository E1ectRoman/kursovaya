import React from 'react';
import User from "./user";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "./bookmark";
import BookMark from "./bookmark";
import user from "./user";


const UserTable = ({users, onSort, selectedSort, onToggleBookMark, onDelete, ...rest}) => {
  const columns = {
    name: {path: 'name', name: 'Имя'},
    qualities: {name: 'Качество'},
    profession: {path: 'profession.name', name: 'Профессия'},
    completedMeetings: {path: 'completedMeetings', name: 'Встретился раз'},
    rate: {path: 'rate', name: 'Оценка'},
    bookmark: {
      path: 'bookmark', name: 'Избранное',
      component: (user) => (
        <BookMark status={user.bookmark}
                  onClick={() => onToggleBookMark(user._id)}
        />
      )
    },
    delete: {
      component: (user) => (
        <button
          onClick={() => onDelete(user._id)}
          className="btn btn-danger"
        >
          Удалить
        </button>
      )
    },
  }
  return (
    <table className="table">
      <TableHeader {...{onSort, selectedSort, columns}}/>
      <TableBody {...{columns, data: users}}/>
      {/*<tbody>*/}
      {/*{users.map((user) => (*/}
      {/*  <User {...rest} {...user} key={user._id}/>*/}
      {/*))}*/}
      {/*</tbody>*/}
    </table>
  );
}

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}


export default UserTable;
