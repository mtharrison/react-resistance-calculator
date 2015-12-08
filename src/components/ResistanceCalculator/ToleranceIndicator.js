import React, { Component } from 'react';

const ToleranceIndicator = ({ tolerance }) => {
    const formatTolerance = () => {
        return tolerance === 0 ?
            "" :
            "±" + tolerance + "%";
    };
    return (
        <p id="tolerance-value">
            {formatTolerance()}
        </p>
    );
};

ToleranceIndicator.propTypes = {
    tolerance: React.PropTypes.number.isRequired
};

export default ToleranceIndicator;
