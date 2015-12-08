import React from 'react';

const SVGResistor = ({ bands, bandOptions }) => {
    const bandPositions = [70,100,130,160,210];
    return (
        <svg width={300} height={100} version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x={0} y={26} rx={5} width={300} height={7} fill="#d1d1d1" />
            <rect x={50} y={0} rx={15} width={200} height={57} fill="#FDF7EB" />
            {bands.map((b, i) =>  (
                <rect
                    key={i}
                    x={bandPositions[i]}
                    width={7}
                    height={57}
                    fill={bandOptions[b].color}
                />
            ))}
        </svg>
    );
};

SVGResistor.propTypes = {
    bands: React.PropTypes.array.isRequired,
    bandOptions: React.PropTypes.array.isRequired
};

export default SVGResistor;
