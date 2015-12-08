import React, { Component } from 'react';

import BandSelector from './BandSelector';
import OhmageIndicator from './OhmageIndicator';
import ResetButton from './ResetButton';
import SVGResistor from './SVGResistor';
import ToleranceIndicator from './ToleranceIndicator';

class ResistanceCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bands: props.config.bands.map(v => v.value || 0),
            resistance: 0,
            tolerance: 0
        };
    }
    getMultiplier() {
        if(this.state.bands[3] == 10)
            return 0.1;
        if(this.state.bands[3] == 11)
            return 0.01;
        return Math.pow(10, this.state.bands[3]);

    }
    calculateResistance() {
        return this.getMultiplier() *
            ((100 * this.state.bands[0]) +
            (10  * this.state.bands[1]) +
            (1   * this.state.bands[2]));
    }
    updateBandState(band, value) {
        const { bandOptions } = this.props.config;
        const { bands } = this.state;
        bands[band] = value;
        this.setState({
            bands,
            resistance: this.calculateResistance(),
            tolerance: bandOptions[this.state.bands[4]].tolerance
        });
    }
    reset() {
        this.setState({
            bands: [0,0,0,0,0],
            resistance: 0,
            tolerance: 0
        });
    }
    render() {
        const { bandOptions, bands: bandsConfig } = this.props.config;
        const { bands, resistance, tolerance } = this.state;
        return (
            <div>
                <SVGResistor bands={bands} bandOptions={bandOptions} />
                <OhmageIndicator resistance={resistance} />
                <ToleranceIndicator tolerance={tolerance} />
                {bands.map((b, i) => {
                    const options = bandOptions.filter((b, j) => (
                        bandsConfig[i].omitOptions.indexOf(j) === -1
                    ));
                    return (
                        <BandSelector
                            options={options}
                            key={i}
                            band={i}
                            value={b}
                            onChange={::this.updateBandState}
                        />
                    );
                })}
                <ResetButton onClick={::this.reset}/>
            </div>
        );
    }
};

ResistanceCalculator.propTypes = {
    config: React.PropTypes.object.isRequired
};

export default ResistanceCalculator;
