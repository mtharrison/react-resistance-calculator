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

export default ToleranceIndicator;
