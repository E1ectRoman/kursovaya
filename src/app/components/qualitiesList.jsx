import React from 'react';
import PropTypes from "prop-types";
import Quality from "./quality";

const QualitiesList = ({qualities}) => {
  return (
    <div>
      {qualities.map((qual) => (
        <Quality {...qual} key={qual._id}/>
      ))}
    </div>
  );
};
QualitiesList.propTypes = {
  qualities: PropTypes.array.isRequired
}

export default QualitiesList;
