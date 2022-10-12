import React from "react";
import PropTypes from "prop-types";

const PropType = ({ title, onClick }) => {
  return <div onClick={onClick}>Title = {title}</div>;
};

PropType.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PropType;
