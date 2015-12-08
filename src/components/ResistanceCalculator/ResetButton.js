import React, { Component } from 'react';

const ResetButton = ({ onClick }) => (
    <button className="reset-button" onClick={onClick}>Reset All</button>
);

ResetButton.propTypes = {
    onClick: React.PropTypes.func.isRequired
};

export default ResetButton;
