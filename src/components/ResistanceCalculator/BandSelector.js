import React, { Component } from 'react';

class BandSelector extends Component {
    constructor(props) {
        super(props);
    }
    handleChange() {
        this.props.onChange(this.props.band, this.refs.menu.value);
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

export default BandSelector;
