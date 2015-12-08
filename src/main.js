import React, { Component } from 'react';
import { render } from 'react-dom';

import ResistanceCalculator from './components/ResistanceCalculator';

const config = {
    bandOptions: [
        { tolerance: 0, color: "black", label: "None" },
        { tolerance: 1, color: "brown", label: "Brown"},
        { tolerance: 2, color: "red", label: "Red"},
        { color: "orange", label: "Orange"},
        { color: "yellow", label: "Yellow"},
        { tolerance: 0.5, color: "green", label: "Green"},
        { tolerance: 0.25, color: "blue", label: "Blue"},
        { tolerance: 0.10, color: "violet", label: "Violet"},
        { tolerance: 0.05, color: "grey", label: "Grey"},
        { color: "white", label: "White"},
        { tolerance: 5, color: "#FFD700", label: "Gold"},
        { tolerance: 10, color: "#C0C0C0", label: "Silver"}
    ],
    bands: [
        { omitOptions: [10,11] },
        { omitOptions: [10,11] },
        { omitOptions: [10,11] },
        { omitOptions: [8,9] },
        { omitOptions: [3,4,9] }
    ]
};

render(<ResistanceCalculator config={config} />, document.getElementById('container'));
