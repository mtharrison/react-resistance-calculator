import React, { Component } from 'react';

class BandSelector extends Component {
    constructor(props) {
        super(props);
    }
    handleChange() {
        this.props.onChange(this.props.band, parseInt(this.refs.menu.value));
    }
    render(){
        const { band, options, value } = this.props;
        return (
            <div className="band-option">
                <label>Band {band + 1}</label>
                <select ref="menu" value={value} onChange={::this.handleChange}>
                {options.map((o, i) => (
                    <option key={i} value={i}>{o.label}</option>
                ))}
                </select>
            </div>
        );
    }
};

BandSelector.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    band: React.PropTypes.number.isRequired,
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.number.isRequired
};

export default BandSelector;
